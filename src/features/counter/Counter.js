import React, { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => console.log("Handle Increment")}
        >
          +
        </button>
        <span className={styles.value}>{0}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => console.log("Handle Decrement")}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => console.log("Handle Add By amount")}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => console.log("Handle Async")}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
