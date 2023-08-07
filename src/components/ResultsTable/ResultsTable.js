import React from "react";
import "./ResultsTable.css";

const ResultsTable = (props) => {
  // Check if props.resultTable is not defined or an empty array
  if (!props.resultTable || props.resultTable.length === 0) {
    return <div>No results to display.</div>;
  }

  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
          </tr>
        </thead>
        <tbody>
          {props.resultTable.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.savingsEndOfYear}</td>
              <td>{item.yearlyInterest}</td>
              <td>{item.yearlyContribution}</td>
              <td>{/* Add logic to calculate the invested capital */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
