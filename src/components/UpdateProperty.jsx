import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/UpdateProperty.css";
const BASEURL =
  "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";
const UpdateProperty = ({ property, closeModal, toggle }) => {
  const toggleModal = toggle ? "modal display-block" : "modal display-none";
  const { register, handleSubmit, setValue } = useForm();
  const [minDate, setMinDate] = useState("");

  const updateProperty = async (data) => {
    console.log(data);
    console.log(property._id);
    await axios.patch(`${BASEURL}/${property._id}`).then((response) => {
      console.log(response.data);
      alert(response.data.message);
      // toggle = false
      closeModal();
    });
  };

  useEffect(() => {
    if (property) {
      setValue("bedroom", property.bedroom);
      setValue("kitchen", property.kitchen);
      setValue("bathroom", property.bathroom);
      setValue("toilet", property.toilet);
      setValue("sittingRoom", property.sittingRoom);
      setValue("validTo", property.validTo);
      setValue("description", property.description);

      const getMinDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];
      };
      setMinDate(getMinDate);
    }
  }, [setValue, property]);

  return (
    <div className={toggleModal}>
      {property && (
        <section className="modal-main">
          <header>
            <h3>
              Update {property.type} Owned by {property.propertyOwner}
            </h3>
            <button className="link" onClick={closeModal}>
              X
            </button>
          </header>
          <form
            className="updateForm"
            onSubmit={handleSubmit(updateProperty)}
            method="post"
          >
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
              <label htmlFor="">Valid Till</label>
              <input
                type="date"
                name="validTo"
                required
                min={minDate}
                {...register("validTo")}
              />{" "}
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
            <div>
              <button className="link" type="submit">
                update property
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default UpdateProperty;
