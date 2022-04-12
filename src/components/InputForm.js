import React, { useState } from "react";
import useForm from "../hooks/UseForm";
import { InputComponent } from "./InputComponent";
import { ModalWindow } from "./ModalWindow";

export const InputForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const [resultValue, setResultValue] = useState(false);

  const formLogin = () => {
    console.log("Callback function when form is submitted!");
  };

  const { value, errors, handleChange, handleSubmit } = useForm(
    formLogin,
    setModalActive,
    setResultValue
  );

  return (
    <form className="input-form-component" onSubmit={handleSubmit}>
      <h4 className="title">
        Accepts banknotes in denominations of: <br></br>50, 100, 200 and 500
      </h4>
      <InputComponent
        textLabeL={"Indicate code of product:"}
        type={"text"}
        name={"productId"}
        value={value?.productId}
        handleChange={handleChange}
        errors={errors?.productId}
      />
      <InputComponent
        textLabeL={"Enter money:"}
        type={"number"}
        name={"inputValue"}
        value={value?.inputValue}
        handleChange={handleChange}
        errors={errors?.inputValue}
      />
      <button>Save</button>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
        resultValue={resultValue}
      />
    </form>
  );
};
