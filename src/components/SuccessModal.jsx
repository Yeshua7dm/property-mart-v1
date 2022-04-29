import React from "react";
import { Link } from "react-router-dom";
import { SingleProperty } from "./";
import "./styles/modal.css";

const SuccessModal = ({ toggle, response, closeModal }) => {
  const toggleModal = toggle ? "modal display-block" : "modal display-none";
  return (
    <div className={toggleModal}>
      <section className="modal-main">
        <h3>Property was successfully added</h3>
        {response && <SingleProperty property={response} />}

        <div className="buttons">
          <Link className="link" to="/">
            View All Properties
          </Link>
          <button className="link" onClick={closeModal}>
            Add New Property
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessModal;
