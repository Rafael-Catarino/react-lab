import "./label.style.css";

export function Label({ text, htmlFor }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

// Another way to do it.
// function Label(props) {
//   return <label htmlFor={props.htmlFor}>{props.children}</label>;
// }
