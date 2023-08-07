import React, { useState } from "react";
import "./UserInput.css";
import SingleInput from "./SingleInput";
const UserInput = (props) => {
  const [userInputData, setUserInputData] = useState({
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 140,
    duration: 6,
  });
  const [resetState, setResetState] = useState(false);
  const handleSingleInputChange = (SingleInput) => {
    const userInput = { ...userInputData };
    if (SingleInput.title === "current-savings")
      userInput.currentSavings = SingleInput.inputValue;
    if (SingleInput.title === "yearly-contribution")
      userInput.yearlyContribution = SingleInput.inputValue;
    if (SingleInput.title === "expected-return")
      userInput.expectedReturn = SingleInput.inputValue;
    if (SingleInput.title === "duration")
      userInput.duration = SingleInput.inputValue;

    setUserInputData(userInput);
    console.log("in UserInput", userInput);
  };

  const resetHandler = (event) => {
    setResetState(true);
    setUserInputData({});
  };
  console.log(resetState);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInputData);
    setResetState(true);
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <SingleInput
            title={"current-savings"}
            onChangeSingleInput={handleSingleInputChange}
            resetState={resetState}
          >
            Current Savings ($)
          </SingleInput>
          <SingleInput
            title={"yearly-contribution"}
            onChangeSingleInput={handleSingleInputChange}
            resetState={resetState}
          >
            Yearly Savings ($)
          </SingleInput>
        </div>

        <div className="input-group">
          <SingleInput
            title={"expected-return"}
            onChangeSingleInput={handleSingleInputChange}
            resetState={resetState}
          >
            Expected Interest (%, per year){" "}
          </SingleInput>
          <SingleInput
            title={"duration"}
            onChangeSingleInput={handleSingleInputChange}
            resetState={resetState}
          >
            Investment Duration (years){" "}
          </SingleInput>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
