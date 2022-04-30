import React from "react";
import SingleProperty from "./SingleProperty";

const ShowProperty = ({ property, toggle, closeModal }) => {
  const toggleModal = toggle ? "modal display-block" : "modal display-none";
  return (
    <div className={toggleModal}>
      <section className="modal-main">
        <header>
          <h3>Property Owned by {property.propertyOwner}</h3>
          <button className="link" onClick={closeModal}>
            X
          </button>
        </header>
        <SingleProperty property={property} />
      </section>
    </div>
  );
};

export default ShowProperty;
