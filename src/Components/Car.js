import React from "react";
import { dateFormat } from "../Utils";

export default function Car(props) {
  const {
    make,
    model,
    imageUrl,
    price,
    user,
    year,
    createdAt,
    color,
  } = props.carData;

  const url = "https://carapp2020.herokuapp.com/images/";
  return (
    <div className="car">
      <div className="imgDiv">
        {imageUrl && <img src={`${url}${imageUrl[0]}`} alt="" />}
      </div>
      <div className="carInfo">
        <h2>
          {make} {model}
        </h2>
        <p>
          <span>Year:</span> {year}
        </p>
        <p>
          <span>Price:</span> {price}
        </p>
        <p>
          <span>Color:</span> {color}
        </p>
        <p>
          <p>
            <span>Owner:</span> {user.firstname} {user.lastname}
          </p>
        </p>
        <p>
          <p>
            <span>City:</span> {user.address.state}, {user.address.city}
          </p>
        </p>
        <p>
          <span>Uploaded:</span> {dateFormat(createdAt)}
        </p>
      </div>
    </div>
  );
}
