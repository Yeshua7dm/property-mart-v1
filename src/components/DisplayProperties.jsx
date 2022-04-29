import React from "react";

const DisplayProperties = ({ properties, selectProperty }) => {
  return (
    <div>
      {properties.map((property) => (
        <div className="SingleProperty" key={property._id}>
          <div className="far-end">
            <p>
              <span className="number">{property.type}</span>
            </p>
          </div>
          <div>
            <section className="flex-even">
              <p>
                Sitting Rooms{" "}
                <span className="number">{property.sittingRoom}</span>
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
            <div className="buttons">

            <button
              className="link"
              onClick={() => {
                selectProperty(property, "view");
              }}
            >
              View Full Property Information
            </button>
            <button
              className="link"
              onClick={() => {
                selectProperty(property, "update");
              }}
            >
              Update Property Information
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProperties;
