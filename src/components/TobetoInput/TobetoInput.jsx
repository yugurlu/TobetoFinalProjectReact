function TobetoInput({ className, label, type, style }) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        style={style}
        defaultValue={null}
      ></input>
    </div>
  );
}

export default TobetoInput;
