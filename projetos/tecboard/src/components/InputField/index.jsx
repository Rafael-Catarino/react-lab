import "./input-fild.style.css";

// Another way to do it
export function InputField(props) {
  return <input className="input-fild" {...props} />;
}

// function InputField({ type, id, placeholder }) {
//   return <input type={type} id={id} placeholder={placeholder} />;
// }
