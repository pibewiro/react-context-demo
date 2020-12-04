import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CarContext = createContext();

export const CarProvider = (props) => {
  const [cars, setCars] = useState(null);

  const getCars = async () => {
    const response = await axios.get(
      "https://carapp2020.herokuapp.com/api/v1/car"
    );

    const carData = response.data.data.map((res) => {
      return {
        make: res.make,
        model: res.model,
        price: res.price,
        year: res.year,
        color: res.color,
        user: res.user,
        createdAt: res.createdAt,
        imageUrl: res.imageUrl ? res.imageUrl : null,
      };
    });
    setCars(carData);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarContext.Provider value={[cars, setCars]}>
      {props.children}
    </CarContext.Provider>
  );
};
