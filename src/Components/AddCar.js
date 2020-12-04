import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { CarContext } from "../Contexts/CarsContext";

export default function AddCar() {
  const [auth] = useContext(AuthContext);
  const [cars, setCars] = useContext(CarContext);

  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [color, setColor] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  const submitCar = (e) => {
    e.preventDefault();

    if (auth) {
      const newCarData = {
        make,
        model,
        year,
        color,
        user: {
          firstname,
          lastname,
          address: {
            city,
            state,
          },
        },
        createdAt: "11/11/11",
      };
      setCars([...cars, { ...newCarData }]);
    } else {
      alert("Please Login");
    }
  };

  return (
    <>
      {cars && (
        <form onSubmit={submitCar} className="addCars">
          <h1>Add Car</h1>
          <div className="addCar">
            <label htmlFor="">Make</label>
            <input
              type="text"
              name="make"
              onChange={(e) => setMake(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Model</label>
            <input
              type="text"
              name="model"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">Year</label>
            <input
              type="text"
              name="year"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">Color</label>
            <input
              type="text"
              name="color"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="addCar">
            <label htmlFor="">State</label>
            <input
              type="text"
              name="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <button>Enter</button>
        </form>
      )}
    </>
  );
}
