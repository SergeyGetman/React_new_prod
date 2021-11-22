import React, {useState} from "react";
import Counters from "./components/Counters";
import "./components/styles/App.css"
import Postitem from "./components/Postitem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", body: "description"},
    {id: 2, title: "JS", body: "description"},
    {id: 3, title: "JS", body: "description"}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">

      <PostForm create={createPost}/>
      <Postlist posts={posts} title={"This My new React"}/>

      <Counters/>
    </div>
  )
}

export default App

