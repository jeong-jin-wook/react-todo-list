import TodoApp from "components/TodoApp";
import "./App.css";
import { useEffect, useState } from "react";

const firstImg = Math.floor(Math.random() * 100) % 8;
const timer = () => {
  let count = 0;

  return;
};

function App() {
  const [image, setImage] = useState(firstImg);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 5000);

    setImage(Math.floor(Math.random() * 100) % 7);
  }, [timer]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundImage: `url('/asset/image/${image}.jpg')` }}
      >
        <h2>Todo List</h2>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
