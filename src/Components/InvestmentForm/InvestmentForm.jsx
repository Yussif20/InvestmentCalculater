import styles from "./InvestmentForm.module.css";
import { useState } from "react";

let initialData = {
  "current-savings": 1000,
  "yearly-contribution": 1500,
  "expected-return": 2000,
  duration: 2500,
};

const InvestmentForm = (props) => {
  // const [currentSavings, setCurrentSavings] = useState("");
  // const [yearlySavings, setYearlySavings] = useState("");
  // const [expectedInterest, setExpectedInterest] = useState("");
  // const [investmentDuration, setInvestmentDuration] = useState("");

  // const currentSavingsHandler = (e) => {
  //   setCurrentSavings(e.target.value);
  // };
  // const yearlySavingsHandler = (e) => {
  //   setYearlySavings(e.target.value);
  // };
  // const expectedInterestHandler = (e) => {
  //   setExpectedInterest(e.target.value);
  // };
  // const investmentDurationHandler = (e) => {
  //   setInvestmentDuration(e.target.value);
  // };
  const [userInput, setUserInput] = useState(initialData);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setUserInput(initialData);
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => {
              inputChangeHandler("current-savings", e.target.value);
            }}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => {
              inputChangeHandler("yearly-contribution", e.target.value);
            }}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => {
              inputChangeHandler("expected-return", e.target.value);
            }}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => {
              inputChangeHandler("duration", e.target.value);
            }}
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default InvestmentForm;
