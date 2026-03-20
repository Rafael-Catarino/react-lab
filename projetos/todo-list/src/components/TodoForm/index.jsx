import { TextInput } from "../Textinput";
import { SaveButton } from "../SaveButton";
import "./todo-form.style.css";

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput
        name="description"
        placeholder="Digite o item que deseja adicionar"
        required
        defaultValue={defaultValue}
      />
      <SaveButton>Salvar item</SaveButton>
    </form>
  );
}
