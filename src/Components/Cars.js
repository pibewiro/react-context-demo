import React, { useContext } from "react";
import { CarContext } from "../Contexts/CarsContext";
import Car from "./Car";
import Loading from "./Loading";

export default function Cars() {
  const [cars] = useContext(CarContext);

  return (
    <div className="cars">
      {cars ? cars.map((res, i) => <Car carData={res} key={i} />) : <Loading />}
    </div>
  );
}
