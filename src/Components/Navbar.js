import React, { useContext } from "react";
import { CarContext } from "../Contexts/CarsContext";
import { AuthContext } from "../Contexts/AuthContext";

export default function Navbar() {
  const [cars] = useContext(CarContext);
  const [auth] = useContext(AuthContext);

  return (
    <nav>
      <h1>Car Site</h1>
      <h1>
        Welcome {auth.firstname} {auth.lastname}
      </h1>
      <h1>Number of Cars: {cars ? cars.length : "-"}</h1>
    </nav>
  );
}
