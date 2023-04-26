import "./App.css";
import axios from "axios";
import React from "react";
function App() {
const [advice,setadvice]=React.useState()
React.useEffect(
  ()=>{
    advicefetch()
  },[]
)
const advicefetch=()=>{
  axios.get("https://api.adviceslip.com/advice")
  .then(res=>setadvice(res.data.slip.advice))
  // .then(json=>console.log(json))
  .catch((error)=>console.log(error))
}
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={advicefetch}><span>GIVE ME ADVICES!</span></button>
      </div>
    </div>
  );
}

export default App;
