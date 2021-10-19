import React, {useState} from "react"
import Counters from "./components/Counters";
import "./components/styles/App.css"
import Postitem from "./components/Postitem";

function App() {
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState("m da...")


  return (
    <div className="App">
      <Counters/>
      <br/>

      <Postitem
        post={{id: 2, title: "JavaScript", body: "Description"}}
      /> <Postitem
      post={{id: 5, title: "React", body: "Description"}}
    /> <Postitem
      post={{id: 2, title: "Mongo", body: "Description"}}
    /> <Postitem
      post={{id: 4, title: "JavaScript", body: "Description"}}
    />


    </div>
  );
}

export default App;
