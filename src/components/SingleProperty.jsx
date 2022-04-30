import React from "react";
const SingleProperty = ({ property }) => {
  // const updateProperty = (propertyID) => {
  //   console.log(propertyID);
  // };
  return (
    <div className="property-items">
      <p>Property Owner: {property.propertyOwner}</p>
      <p>Description: {property.description}</p>
      <p>Valid From: {property.validFrom}</p>
      <p>Valid Till: {property.validTo}</p>
      <p>Address: {property.address}</p>
      <p>Property Type: {property.type}</p>
      <p>Number of Bedrooms: {property.bedroom}</p>
      <p>Number of Sitting rooms: {property.sittingRoom}</p>
      <p>Number of Kitchens: {property.kitchen}</p>
      <p>Number of Bathrooms: {property.bathroom}</p>
      <p>Number of Toilets: {property.toilet}</p>

      {property.images.length > 0 && (
        <p className="modal-images">
          {property.images.map((image) => (
            <p key={image._id}>
            <img
              className="modal-image"
              src={image.path}
              alt={image.originalname}
              
            /> </p>
          ))}
        </p>
      )}
    </div>
  );
};

export default SingleProperty;
