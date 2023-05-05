import React, { useState } from "react";
import arrow from "../assets/icon-arrow-down.svg";

const Accordion = ({ question, answer }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="accordion">
      <div className="flex-between" onClick={() => setIsSelected(!isSelected)}>
        <p className={isSelected ? "question-focused" : "question"}>
          {question}
        </p>
        <img
          className={isSelected ? "rotated-arrow" : "arrow"}
          src={arrow}
          alt=""
        />
      </div>

      {isSelected ? <p className="answer">{answer}</p> : null}
    </div>
  );
};

export default Accordion;
