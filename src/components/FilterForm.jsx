import React from "react";
import { useForm } from "react-hook-form";
import "./styles/FilterForm.css";

const FilterForm = ({ filterOptionsHandler }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      method="post"
      onSubmit={handleSubmit((data) => {
        filterOptionsHandler(data);
      })}
    >
      <div>
        <p>Bedrooms</p>
        <input
          min="0"
          type="number"
          name="bedrooms"
          {...register("bedrooms")}
        />
      </div>
      <div>
        <p>Sitting rooms</p>
        <input
          min="0"
          type="number"
          name="sittingRooms"
          {...register("sittingRooms")}
        />
      </div>
      <div>
        <p>Bathrooms</p>
        <input
          min="0"
          type="number"
          name="bathrooms"
          {...register("bathrooms")}
        />
      </div>
      <div>
        <p>Kitchens</p>
        <input
          min="0"
          type="number"
          name="kitchens"
          {...register("kitchens")}
        />
      </div>
      <div>
        <p>Toilets</p>
        <input min="0" type="number" name="toilets" {...register("toilets")} />
      </div>
      <div>
        <p>Property Owner</p>
        <select name="propertyOwner" id="">
          <option value="Build">Build</option>
        </select>
      </div>
      <div>
        <button type="submit">Filter Properties</button>
      </div>
    </form>
  );
};

export default FilterForm;
