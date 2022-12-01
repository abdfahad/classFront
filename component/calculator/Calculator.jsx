import { useState } from "react";
const Calculator=()=> {
  const [calculation, setCalculation] = useState("");
  const actions = ["/", "*", "+", "-", "."];
  const actionsCal = ["/", "*", "+", "-"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const updateCalculation = (value) => {
    if (
      actions.includes(value) & (calculation === "") ||
      actions.includes(value) & actions.includes(calculation.slice(-1))
    ) {
      return;
    }
    setCalculation(calculation + value);
  };
  const createDigits = () => {
    return numbers.map((number) => {
      return (
        <button onClick={() => updateCalculation(number)} key={number}>
          {number}
        </button>
      );
    });
  };
  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };
  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  return (
    <div>
      <div className="calc-grid">
        <div className="output">{calculation || "0"}</div>

        <div>
          <div className="ops">
            {actionsCal.map((action) => (
              <button onClick={() => updateCalculation(action)} key={action}>
                {action}
              </button>
            ))}
            <button onClick={clear}>
              {" "}
              <img
                width={30}
                height={30}
                src="https://cdn-icons-png.flaticon.com/512/159/159805.png"
              />
            </button>
          </div>
          <div className="dig">
            {createDigits()}
            <button
              onClick={() => {
                updateCalculation(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                updateCalculation("0");
              }}
            >
              0
            </button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
