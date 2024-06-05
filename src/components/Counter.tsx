import { useState } from "react";
import "./Counter.scss";
import { FaXmark, FaCheck } from "react-icons/fa6";

export const Counter = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementNum = (type: string) => {
    if (type === "good") setGood((prevGood) => (prevGood += 1));
    if (type === "bad") setBad((prevBad) => (prevBad += 1));
  };

  return (
    <div className="Counter">
      <div className="Counter__good" onClick={() => incrementNum("good")}>
        <div className="Counter__num">{good}</div>
        <div className="Counter__icon">
          <FaCheck size="10em" color="white" />
        </div>
      </div>
      <div className="Counter__bad" onClick={() => incrementNum("bad")}>
        <div className="Counter__num">{bad}</div>
        <div className="Counter__icon">
          <FaXmark size="10em" color="white" />
        </div>
      </div>
    </div>
  );
};
