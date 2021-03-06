import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./styles/AddProperty.css";
import { useState, useEffect } from "react";
import { SuccessModal } from "./";

const BASEURL = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki";
const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const [minDate, setMinDate] = useState("");
  const [addResponse, setAddResponse] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    const getMinDate = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    };
    setMinDate(getMinDate);
  }, []);
  const handleClose = () => {
    setToggleModal(false);
    reset(
      {
        address: "",
        type: "",
        bedroom: "",
        sittingRoom: "",
        kitchen: "",
        bathroom: "",
        toilet: "",
        propertyOwner: "",
        description: "",
        validFrom: "",
        validTo: "",
        images: null,
      },
      {
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
  };
  const SubmitForm = async (data) => {
    let imagesCollection = [];

    for (const image of data.images) {
      const formData = new FormData();
      formData.append("file", image, image.name);
      try {
        await axios.post(`${BASEURL}/upload`, formData).then((response) => {
          imagesCollection.push(response.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    }
    data.images = imagesCollection;

    try {
      await axios.post(`${BASEURL}/property`, data).then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          setAddResponse(response.data.data);
          setToggleModal(true);
        }
      });
    } catch (error) {
      console.log(error.response.data);
      alert(error.data.data);
    }
  };
  return (
    <div>
      <header>
        <h2>Property Mart v1</h2>
        <nav>
          <Link className="link" to="/">
            All Properties
          </Link>
        </nav>
      </header>
      <form
        className="addPropertyForm"
        method="post"
        onSubmit={handleSubmit(SubmitForm)}
      >
        <div>
          <label htmlFor="">Property Type</label>
          <input type="text" name="type" required {...register("type")} />
        </div>
        <div>
          <label htmlFor="">Number of Bedrooms</label>
          <input
            type="number"
            min="1"
            name="bedroom"
            required
            {...register("bedroom")}
          />
        </div>
        <div>
          <label htmlFor="">Number of Sitting rooms</label>
          <input
            type="number"
            min="1"
            name="sittingRoom"
            required
            {...register("sittingRoom")}
          />
        </div>
        <div>
          <label htmlFor="">Number of Kitchens</label>
          <input
            type="number"
            min="1"
            name="kitchen"
            required
            {...register("kitchen")}
          />
        </div>
        <div>
          <label htmlFor="">Number of Bathrooms</label>
          <input
            type="number"
            min="1"
            name="bathroom"
            required
            {...register("bathroom")}
          />
        </div>
        <div>
          <label htmlFor="">Number of Toilets</label>
          <input
            type="number"
            min="1"
            name="toilet"
            required
            {...register("toilet")}
          />
        </div>
        <div>
          <label htmlFor="">Property Owner</label>
          <input
            className="owner"
            type="text"
            name="propertyOwner"
            required
            {...register("propertyOwner")}
          />
        </div>
        <div className="empty"></div>
        <div>
          <label htmlFor="">Valid From</label>
          <input
            type="date"
            min={minDate}
            name="validFrom"
            required
            {...register("validFrom")}
          />
        </div>
        <div>
          <label htmlFor="">Valid Till</label>
          <input
            type="date"
            name="validTo"
            required
            min={minDate}
            {...register("validTo")}
          />
        </div>
        <div>
          <label htmlFor="">Property Address</label>
          <textarea
            name="address"
            required
            {...register("address")}
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label htmlFor="">Property Description</label>
          <textarea
            name="description"
            required
            {...register("description")}
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div className="empty">
          <label htmlFor="images">Upload Images</label>
          <input
            className="owner"
            type="file"
            required
            name="images"
            {...register("images")}
            multiple
          />
        </div>
        <div>
          <button className="link" type="submit">
            add property
          </button>
        </div>
      </form>

      {/* modal here */}
      <SuccessModal
        toggle={toggleModal}
        closeModal={handleClose}
        response={addResponse}
      />
    </div>
  );
};

export default AddProperty;
