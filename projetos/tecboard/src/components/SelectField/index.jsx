import "./select-field.style.css";

export function Selectfield({ themes, ...rest }) {
  return (
    <select className="select-field" {...rest} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {themes.map((theme) => {
        return (
          <option className="option" key={theme.id} value={theme.id}>
            {theme.title}
          </option>
        );
      })}
    </select>
  );
}
