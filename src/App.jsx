import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Footer,
  PropertyItem,
  FilterForm,
  ShowProperty,
  UpdateProperty,
} from "./components";
import { useEffect, useState } from "react";
const BASEURL = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki";

function App() {
  const [allProperties, setAllProperties] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [toggleViewModal, setToggleViewModal] = useState(false);
  const [toggleUpdateModal, setToggleUpdateModal] = useState(false);

  const propertyToDisplay = (property, todo) => {
    setSelectedProperty(property);
    todo === "view" ? setToggleViewModal(true) : setToggleUpdateModal(true);
  };

  const handleFilterOptions = async ({
    bedrooms,
    sittingRooms,
    bathrooms,
    kitchens,
    toilets,
  }) => {
    let URL = "";
    if (
      bedrooms === "" &&
      sittingRooms === "" &&
      bathrooms === "" &&
      kitchens === "" &&
      toilets === ""
    ) {
      URL = BASEURL + "/property";
      setFiltered(false);
    } else {
      setFiltered(true);
      let endURL = "/property?";
      endURL += bedrooms ? `bedroom=${bedrooms}` : "";
      endURL += sittingRooms ? `&sittingRoom=${sittingRooms}` : "";
      endURL += bathrooms ? `&bathroom=${bathrooms}` : "";
      endURL += kitchens ? `&kitchen=${kitchens}` : "";
      endURL += toilets ? `&toilet=${toilets}` : "";
      URL = BASEURL + endURL;
      try {
        await axios.get(URL).then((response) => {
          const data =
            response.data.status === "success" ? response.data.data : [];

          setFilteredProperties(data);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const closeViewModal = () => {
    setToggleViewModal(false);
  };
  const closeUpdateModal = () => {
    setToggleUpdateModal(false);
  };
  // get all the properties at the start of the process
  useEffect(() => {
    const getAllProperties = async () => {
      try {
        await axios.get(`${BASEURL}/property`).then((response) => {
          // console.log(response.data.data);
          if (response.status === 200) {
            setAllProperties(response.data.data);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllProperties();
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Property Mart v1</h2>
        <nav>
          <Link className="link" to="/addProperty">
            Add New Property
          </Link>
        </nav>
      </header>
      <FilterForm filterOptionsHandler={handleFilterOptions} />
      {filtered ? (
        filteredProperties.map((property) => (
          <PropertyItem
            key={property._id}
            property={property}
            selectProperty={propertyToDisplay}
          />
        ))
      ) : (
        allProperties.map((property) => (
            <PropertyItem
              key={property._id}
              property={property}
              selectProperty={propertyToDisplay}
            />
          ))
      )}
      {selectedProperty && (
        <>
          <ShowProperty
            property={selectedProperty}
            toggle={toggleViewModal}
            closeModal={closeViewModal}
          />
          <UpdateProperty
            property={selectedProperty}
            toggle={toggleUpdateModal}
            closeModal={closeUpdateModal}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
