import React, { useState } from "react";

const SingleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    props.onChangeSingleInput({
      title: props.title,
      inputValue: newValue,
    });

    if (props.resetState) {
      setInputValue("");
    }
  };
  return (
    <div>
      <p>
        <label htmlFor={props.title}>{props.children}</label>
        <input type="number" id={props.title} onChange={handleChange} />
      </p>
    </div>
  );
};

export default SingleInput;
