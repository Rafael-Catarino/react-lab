import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../TodoItem";
import { ToDoList } from "../TodoList";

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
