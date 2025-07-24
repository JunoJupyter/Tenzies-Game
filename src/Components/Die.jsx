import React, { useEffect, useState } from "react";

function Die(props) {
  const [fixed, setFixed] = useState(false);
  const [finalValue, setFinalValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  function fixDiceValue() {
    setFinalValue(props.value);
    setFixed((prev) => !prev);
  }

  // Detect change in props.value to trigger animation
  useEffect(() => {
    if (!fixed) {
      setIsRolling(true);
      const timer = setTimeout(() => {
        setIsRolling(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [props.rollTrigger]);

  return (
    <button
      type="submit"
      onClick={fixDiceValue}
      className={`dice ${fixed ? "fixedDice" : ""} ${
        isRolling ? "rolling" : ""
      }`}
    >
      {fixed ? finalValue : props.value}
    </button>
  );
}

export default Die;
