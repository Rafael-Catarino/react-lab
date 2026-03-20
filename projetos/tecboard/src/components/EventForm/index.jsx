import "./event-form.style.css";
import { FormField } from "../FormField";
import { FormTitle } from "../FormTitle";
import { InputField } from "../InputField";
import { Label } from "../Label";
import { Selectfield } from "../SelectField";
import { Button } from "../Button";

export function EventForm({ themes, addCards }) {
  function formSubmitted(formData) {
    const event = {
      img: formData.get("eventImg"),
      theme: themes.find((theme) => {
        return theme.id == formData.get("eventTheme");
      }),
      date: new Date(formData.get("eventData")),
      title: formData.get("eventName"),
    };
    addCards(event);
  }

  return (
    <form className="event-form" action={formSubmitted}>
      <FormTitle>Preencha para criar um evento:</FormTitle>
      <div className="field">
        <FormField>
          <Label text="Qual o nome do evento?" htmlFor="eventName" />
          <InputField
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
            name="eventName"
          />
        </FormField>
        <FormField>
          <Label text="Qual o endereço da imagem de capa?" htmlFor="eventImg" />
          <InputField
            type="text"
            id="eventImg"
            placeholder="http://..."
            name="eventImg"
          />
        </FormField>
        <FormField>
          <Label text="Data do Evento" htmlFor="eventData" />
          <InputField type="date" id="eventData" name="eventData" />
        </FormField>
        <FormField>
          <Label text="Tema do Evento" htmlFor="eventTheme" />
          <Selectfield id="eventTheme" name="eventTheme" themes={themes} />
        </FormField>
      </div>
      <div className="actions">
        <Button text="Criar Evento" />
      </div>
    </form>
  );
}
