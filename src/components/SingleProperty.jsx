import React from "react";
import "./styles/SingleProperty.css";
const SingleProperty = ({ property }) => {
  const updateProperty = (propertyID) => {
    console.log(propertyID);
  };
  return (
    <div className="SingleProperty">
      <div className="far-end">
        <p><span className="number">{property.type}</span></p>
      </div>
      <div>
        <section className="flex-even">
          <p>
            Sitting Rooms <span className="number">{property.sittingRoom}</span>
          </p>
          <p>
            Bedrooms <span className="number">{property.bedroom}</span>
          </p>
          <p>
            Kitchens <span className="number">{property.kitchen}</span>
          </p>
        </section>
        <section className="flex-even">
          <p>
            Toilet <span className="number">{property.toilet}</span>
          </p>
          <p>
            Bathrooms <span className="number">{property.bathroom}</span>
          </p>
        </section>
        <section className="flex-end">
          <p>
            Toilet <span className="number">{property.toilet}</span>
          </p>
          <p>
            Bathrooms <span className="number">{property.bathroom}</span>
          </p>
        </section>
        <button onClick={() => updateProperty(property._id)}>
          Update Property
        </button>
      </div>
    </div>
  );
};

export default SingleProperty;
