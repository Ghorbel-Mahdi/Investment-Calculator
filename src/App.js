import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
import React, { useState } from "react";

function App() {
  const [calculatedTable, SetCalculatedTable] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    console.log("in App.js", userInput);
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    SetCalculatedTable(yearlyData);
    console.log("this is calculated Table", calculatedTable);
  };

  return (
    <div>
      <Header></Header>
      {
        //form component here
      }
      <UserInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {
        //table componenet here
      }
      <ResultsTable resultTable={calculatedTable} />
    </div>
  );
}

export default App;
