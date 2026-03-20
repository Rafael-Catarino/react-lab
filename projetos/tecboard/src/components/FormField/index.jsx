import "./form-field.style.css";

export function FormField({ children }) {
  return <fieldset className="form-field">{children}</fieldset>;
}
