import React from "react";
import { data } from "../../data";

export const VendingSide = () => {
  return (
    <div className="container">
      <div className="vending-title">
        <h1>Vending Machine</h1>
      </div>
      <div className="vending-content">
        {data.map((el) => (
          <div key={el.id} className="vending-item">
            <img src={el.src} alt={el.name} />
            <div className="content">
              <p className="content__name">Name: {el.name}</p>
              <p className="content__price">Price: {el.price}$</p>
              <p className="content__code">Code: <span>{el.code}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
