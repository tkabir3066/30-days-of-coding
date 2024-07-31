import React, { useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };

    case "FETCH_DATA_SUCCESS":
      return { loading: false, error: null, data: payload };

    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: payload };

    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload),
      };

    case "ADD_DATA":
      return {
        ...state.data,
        data: [...state.data, payload],
      };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      // console.log(data);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };

  const deleteData = (itemId) => {
    dispatch({ type: "DELETE_DATA", payload: itemId });
  };

  const addData = (newData) => {
    dispatch({ type: "ADD_DATA", payload: newData });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addData({
      id: Date.now(),
      title: e.target.title.value,
    });
  };

  return (
    <div>
      <button onClick={fetchData}>FetchData</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}

      <ul>
        {state.data &&
          state.data.map((item) => (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => deleteData(item.id)}>Delete</button>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Add new Item" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
