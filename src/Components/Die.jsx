function Die(props) {
  return (
    <button
      type="button"
      onClick={() => props.freeze(props.id)}
      className={props.isFixed ? "dice fixedDice" : "dice"}
    >
      {props.value}
    </button>
  );
}

export default Die;
