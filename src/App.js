import React, {useState} from "react"

import "./components/styles/App.css"

import Postlist from "./components/Postlist";

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"},
    {id: 3, title: "Script", body: "Description"},
  ])

  const [posts2, setPost2] = useState([
    {id: 1, title: "Python", body: "Description"},
    {id: 2, title: "Ruby", body: "Description"},
    {id: 3, title: "Cotlin", body: "Description"},
  ])



  return (
    <div className="App">
      <Postlist posts={posts} title={"Посты про JS "}/>
      <Postlist posts={posts2} title={"Посты про Python"}/>
    </div>
  );
}

export default App;
