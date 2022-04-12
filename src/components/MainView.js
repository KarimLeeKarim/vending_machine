import React from "react";
import { InputForm } from "./InputForm";
import { VendingSide } from "./VendingSide";

function MainView() {
  return (
    <div className="App">
      <VendingSide />
      <InputForm />
    </div>
  );
}

export default MainView;
