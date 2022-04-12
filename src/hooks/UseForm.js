import React, { useState } from "react";
import { data } from "../../data";

const initialValues = {
  productId: "",
  inputValue: "",
};
const initialError = {
  productId: "",
  inputValue: "",
};

export const useForm = (callback, setModalActive, setResultValue) => {
  const [value, setValue] = useState(initialValues);
  const [errors, setError] = useState(initialError);

  const handleChange = (e, field) => {
    e.preventDefault();
    setValue({ ...value, [field]: e.target.value });
  };

  const validation = () => {
    let errors = {};
    let isValid = true;

    let codeOfProduct = value?.productId.toUpperCase();
    let payment = +value?.inputValue;

    const product = data.find((product) => {
      return product.code === codeOfProduct;
    });

    if (product?.code) {
      if (payment !== product.price) {
        if (payment > product.price) {
          var last2DigitsOfProduct = product.price.toString().slice(-2);
          const result = payment - product.price;
          if (+last2DigitsOfProduct < 50) {
            if (50 - +last2DigitsOfProduct === result) {
              setResultValue(
                `${product.name} and your ${result} сhange have been served`
              );
            } else {
              isValid = false;
              errors["inputValue"] =
                "Indicate value is to high than product price";
            }
          } else {
            if (100 - +last2DigitsOfProduct === result) {
              setResultValue(
                `${product.name} and your ${result} сhange have been served`
              );
            } else {
              isValid = false;
              errors["inputValue"] =
                "Indicate value is to high than product price";
            }
          }
        } else {
          isValid = false;
          errors["inputValue"] = "Insufficient funds. Please insert more cash.";
        }
      } else {
        setResultValue(`${product.name} have been served`);
      }
    } else {
      isValid = false;
      errors["productId"] =
        "Unfortunatelly, we don't have that kind of product";
    }

    if (!value["productId"]) {
      isValid = false;
      errors["productId"] = "Product field cannot be empty";
    }
    if (!value["inputValue"]) {
      isValid = false;
      errors["inputValue"] = "Value cannot be empty";
    }
    if (
      +value.inputValue % 50 !== 0 ||
      (+value.inputValue > 750 && +value.inputValue < 1000)
    ) {
      isValid = false;
      errors["inputValue"] = "Enter in the specified denominations";
    }

    setError({ ...errors });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      setValue({
        productId: "",
        inputValue: "",
      });
      setModalActive(true);
    }
  };

  return {
    value,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
