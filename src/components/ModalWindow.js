import React from "react";

export const ModalWindow = ({ active, setActive,resultValue }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{resultValue}</p>
      </div>
    </div>
  );
};