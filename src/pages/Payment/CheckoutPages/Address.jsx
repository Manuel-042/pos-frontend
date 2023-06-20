import React, { useState } from "react";
import styles from "../Payment.module.css";
import { useContext } from "react";
import { CartContext } from "../../../helper/context";
import { useEffect } from "react";
import axios from "axios";
import CountrySelector from "../CountrySelector";

const Address = (props) => {
  const [addressData, setAddressData] = useState({
    street_number: "",
    address_line_1: "",
    address_line_2: "",
    country: "",
    phone: "",
    region: "",
    city: "",
    postalcode: "",
    isdefault: false,
  });

  const { setAddress } = useContext(CartContext);
  const [user, setUser] = useState([]);

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressData({
      ...addressData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  let handleAddress = async (event) => {
    event.preventDefault();
    props.check((prev) => {
      return { ...prev, deliveryAddress: true };
    });
    setTimeout(() => {
      setAddress(true);
    }, 500);
    console.log(addressData);
    props.addToForm((prev) => {
      return { ...prev, ...addressData };
    });

    try {
      const response = await axios.post(
        "http://localhost/CI/register/address",
        addressData,
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost/CI/register/getUserName", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.user);
        setUser(response.data.user);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost/CI/register/getCountry", { withCredentials: true })
  //     .then((response) => {
  //       setCountries(response.data);
  //     });
  // }, []);

  const disabled = addressData.address_line_1 === "" && true;

  return (
    <form id="form" onSubmit={handleAddress} className={styles.fmain}>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          placeholder="John"
          name="first_name"
          //value={addressData.first_name}
          onChange={handleAddressChange}
          value={user.first_name}
        ></input>
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          placeholder="Doe"
          name="last_name"
          //value={addressData.last_name}
          onChange={handleAddressChange}
          value={user.last_name}
        ></input>
      </div>
      <div>
        <label htmlFor="stree_number">Street Number</label>
        <input
          type="text"
          id="street_number"
          placeholder="1826"
          name="street_number"
          value={addressData.street_number}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div>
        <label htmlFor="address_line_1">Address Line 1</label>
        <input
          type="text"
          id="address_line_1"
          placeholder="Martin Luther King Blvd"
          name="address_line_1"
          value={addressData.address_line_1}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div>
        <label htmlFor="address_line_2">Address Line 2</label>
        <input
          type="text"
          id="address_line_2"
          placeholder="for further description... (optional)"
          name="address_line_2"
          value={addressData.address_line_2}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div>
        <label htmlFor="country" className={styles.country}>
          Country
        </label>
        <CountrySelector />
        {/* <select
          name="country"
          id="country"
          value={addressData.country}
          onChange={handleAddressChange}
        >
          <option value="" disabled>
            Select Country
          </option>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select> */}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <div className={styles.phone}>
          {/* <div className={styles.prefix}>
            <p>+1</p>
          </div> */}
          <input
            type="number"
            id="phone"
            placeholder="(985) 223-8900"
            name="phoneNumber"
            value={addressData.phoneNumber}
            onChange={handleAddressChange}
          ></input>
        </div>
      </div>
      <div>
        <label htmlFor="region">State/Province/Region</label>
        <input
          type="text"
          id="region"
          placeholder="Louisiana"
          name="region"
          value={addressData.region}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div>
        <label htmlFor="city">City/Town</label>
        <input
          type="text"
          id="city"
          placeholder="Houma"
          name="city"
          value={addressData.city}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div>
        <label htmlFor="postalcode">Zip/Postal Code</label>
        <input
          type="text"
          id="postalcode"
          placeholder="70360"
          name="postalcode"
          value={addressData.postalcode}
          onChange={handleAddressChange}
        ></input>
      </div>
      <div className={styles.isdefault}>
        <input
          type="checkbox"
          id="isdefault"
          name="isdefault"
          checked={addressData.isdefault}
          className={styles.inputdefault}
          onChange={handleAddressChange}
        ></input>
        <label htmlFor="isdefault" className={styles.labelS}>
          Use as Default Address?
        </label>
      </div>
      <button type="submit" className={styles.addressBtn} disabled={disabled}>
        ADD ADDRESS
      </button>
    </form>
  );
};

export default Address;
