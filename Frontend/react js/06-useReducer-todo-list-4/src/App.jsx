import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== payload),
      };

    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim()) {
      dispatch({ type: "ADD_TODO", payload: todo });
      setTodo("");
    }
  };

  const removeTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
