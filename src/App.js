import React, {useState} from "react"

import "./components/styles/App.css"

import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"},
    {id: 3, title: "Script", body: "Description"},
  ])





  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>CREATE POST</MyButton>

      </form>
      
      <Postlist posts={posts} title={"Посты про JS "}/>

    </div>
  );
}

export default App;
