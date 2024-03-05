import { useState } from "react";
import { useReducer } from "react";

const Reducer = () => {
  const countReducer = (oldCount, action) => {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  };
  const DOWN = () => countDispatch({ type: "DOWN", number: number });
  const UP = () => countDispatch({ type: "UP", number: number });
  const RESET = () => countDispatch({ type: "RESET", number: number });
  const [count, countDispatch] = useReducer(countReducer, 0);

  const [number, setNumber] = useState(1);
  const changeNumber = (event) => {
    setNumber(Number(event.target.value));
  };
  return (
    <>
      <input type="button" value="-" onClick={DOWN} />
      <input type="button" value="reset" onClick={RESET} />
      <input type="button" value="+" onClick={UP} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </>
  );
};

export default Reducer;
