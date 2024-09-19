import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const fetchapi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="buttonBox">
      <h1>Joke Generator Using React and Joke API</h1>
      <br />
      <button onClick={fetchapi}>Get Joke</button>
      <br />
      <p>{joke}</p>
    </div>
  );
}

export default App;
