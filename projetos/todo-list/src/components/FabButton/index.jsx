import "./fab-button.style.css";

export function FabButton({ children, ...res }) {
  return (
    <button className="fab" {...res}>
      {children}
    </button>
  );
}
