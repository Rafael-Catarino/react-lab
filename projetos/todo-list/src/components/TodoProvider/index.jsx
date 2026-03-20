import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(
    savedTodo
      ? JSON.parse(savedTodo)
      : [
          {
            id: 1,
            description: "JSX e componentes",
            completed: false,
            createdAt: "2022-10-31",
          },
          {
            id: 2,
            description: "Controle de inputs e formulários controlados",
            completed: true,
            createdAt: "2022-10-31",
          },
        ],
  );
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
    // toggleDialog();
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
