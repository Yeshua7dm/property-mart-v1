import React from "react";
import SingleProperty from "./SingleProperty";

const DisplayProperties = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <SingleProperty key={property._id} property={property} />
      ))}
    </div>
  );
};

export default DisplayProperties;
