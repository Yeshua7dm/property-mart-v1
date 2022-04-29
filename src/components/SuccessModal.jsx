import React from "react";
import { Link } from "react-router-dom";
import { SingleProperty } from "./";
import "./styles/modal.css";

const SuccessModal = ({ toggle, response, closeModal }) => {
  response = {
    address: "Ikeja, Lagos",
    type: "Luxury",
    bedroom: 8,
    sittingRoom: 3,
    kitchen: 3,
    bathroom: 8,
    toilet: 8,
    propertyOwner: "Mide",
    description: "luxury building at Ikeja",
    validFrom: "2022-04-30",
    validTo: "2022-05-06",
    images: [
      {
        fieldname: "file",
        originalname: "Screenshot (17).png",
        encoding: "7bit",
        mimetype: "image/png",
        path: "https://res.cloudinary.com/moyinoluwa/image/upload/v1651241906/sfc/lekki/vyeijddxet08x9mrin81.png",
        size: 3644393,
        filename: "sfc/lekki/vyeijddxet08x9mrin81",
      },
      {
        fieldname: "file",
        originalname: "Screenshot (17).png",
        encoding: "7bit",
        mimetype: "image/png",
        path: "https://res.cloudinary.com/moyinoluwa/image/upload/v1651241906/sfc/lekki/vyeijddxet08x9mrin81.png",
        size: 3644393,
        filename: "sfc/lekki/vyeijddxet08x9mrin81",
      },
    ],
    _id: "626bf3b4b661b54a26e4f679",
    createdAt: "2022-04-29T14:18:28.101Z",
    updatedAt: "2022-04-29T14:18:28.101Z",
    __v: 0,
  };

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
