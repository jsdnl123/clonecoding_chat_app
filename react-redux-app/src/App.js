import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchPosts from "./actions/posts";

function App({ value, onDecreament, onIncreament }) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncreament}>+</button>
      <button onClick={onDecreament}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange}></input>
        <input type="submit" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
