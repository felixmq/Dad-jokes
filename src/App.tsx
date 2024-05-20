import axios from "axios";
import { useEffect, useState } from "react";



function App() {
  const [jokes, setJokes] = useState<string>("")

  const fetchJoke = async () => {
    const resp = await axios.get("https://api.chucknorris.io/jokes/random");
    setJokes(resp.data.value);
  }

  useEffect(()=>{
    fetchJoke();
  },[])

  return (
    <div className='app'>
      <h1>Get new Joke🤣</h1>
      <p>{jokes}</p>
      <button className="btn" onClick={fetchJoke}>Get new joke</button>
    </div>
  )
}

export default App
