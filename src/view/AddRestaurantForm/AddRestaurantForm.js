import React, { useState } from "react";

function AddRestaurantForm(props) {
  const { addRestaurant } = props;

  const [isForm, setIsForm] = useState({
    newRestaurant: {
      name: "",
      country: "",
      image: "",
      address: "",
      type: "",
      oprating_hours: "",
      city: "",
      long: "",
      lat: "",
    },
  });

  const handleInputChangeForm = (e) => {
    let { newRestaurant } = isForm;
    const name = e.target.name;
    const value = e.target.value;
    newRestaurant[name] = value;
    setIsForm({
      newRestaurant,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(isForm.newRestaurant);
    setIsForm({
      newRestaurant: {
        name: "",
        country: "",
        image: "",
        address: "",
        type: "",
        oprating_hours: "",
        city: "",
        long: "",
        lat: "",
      },
    });
  };

  let { name, country, image, address, type, oprating_hours, city, long, lat } =
    isForm.newRestaurant;

  return (
    <div className="wrapper registration-form">
      <div className="container">
        <div className="Heading">
          <span>ADD NEW RESTAURANT</span>
        </div>
        <form className="validation" onSubmit={handleSubmit}>
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Restaurant Name"
              value={name}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          <div>
            <label className="label">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Restaurant Type"
              value={type}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          {/* <div>
            <label className="label">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Restaurant Image"
              value={image}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div> */}
          <div>
            <label className="label">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Restaurant Address"
              value={address}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          <div>
            <label className="label">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          <div>
            <label className="label">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          <div className="location-inputs">
            <label className="label">Location</label>
            <input
              type="number"
              id="long"
              name="long"
              placeholder="long"
              value={long}
              onChange={handleInputChangeForm}
              className="validation-data long-data"
              required
            />
            <input
              type="number"
              id="lat"
              name="lat"
              placeholder="lat"
              value={lat}
              onChange={handleInputChangeForm}
              className="validation-data lat-data"
              required
            />
          </div>
          <div>
            <label className="label">Operating Time</label>
            <input
              type="text"
              name="oprating_hours"
              id="oprating_hours"
              placeholder="operating time"
              value={oprating_hours}
              onChange={handleInputChangeForm}
              className="validation-data"
              required
            />
          </div>
          <button className="valid-btn" type="submit">
            Submit
          </button>
        </form>
        {/* <p className="errorMessage">{message}</p> */}
      </div>
    </div>
  );
}
export default AddRestaurantForm;
