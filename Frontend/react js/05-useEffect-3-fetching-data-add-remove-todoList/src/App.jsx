import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      setPosts(data?.posts);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeTodo = (todoId) => {
    const filteredTodo = posts.filter((post) => post.id !== todoId);
    setPosts(filteredTodo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      const newTodo = {
        id: posts.length + 1,
        title: todo,
      };
      setPosts([...posts, newTodo]);
      setTodo("");
    }
  };
  return (
    <div>
      {isLoading && <h4>Data is Loading...</h4>}
      {error && <p>{error?.message}</p>}

      <button onClick={fetchData}>Fetch Data</button>
      {posts.map((post) => (
        <ul key={post?.id}>
          <li>
            {post?.title}{" "}
            <button onClick={() => removeTodo(post.id)}>Remove</button>
          </li>
        </ul>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
