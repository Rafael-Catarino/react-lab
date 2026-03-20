import "./save-button.style.css";

export function SaveButton({ children, ...rest }) {
  return (
    <button className="saveButton" {...rest}>
      {children}
    </button>
  );
}
