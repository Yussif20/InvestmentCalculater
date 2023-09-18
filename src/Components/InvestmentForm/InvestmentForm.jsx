import styles from "./InvestmentForm.module.css";
import { useState } from "react";

const InvestmentForm = () => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (e) => {
    setCurrentSavings(e.target.value);
  };
  const yearlySavingsHandler = (e) => {
    setYearlySavings(e.target.value);
  };
  const expectedInterestHandler = (e) => {
    setExpectedInterest(e.target.value);
  };
  const investmentDurationHandler = (e) => {
    setInvestmentDuration(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const investmentData = {
      curSavings: currentSavings,
      yearSavings: yearlySavings,
      expectInterest: expectedInterest,
    };
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };
  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={yearlySavings}
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
            onChange={expectedInterestHandler}
            value={expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
            value={investmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className={styles.buttonAlt}
          onReset={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className={styles.button}
          onSubmit={submitHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};
export default InvestmentForm;
