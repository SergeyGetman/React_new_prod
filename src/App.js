import React, {useState} from "react";
import Counters from "./components/Counters";
import "./components/styles/App.css"
import Postitem from "./components/Postitem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "FartRooN", body: "asd"},
    {id: 2, title: "JS", body: "123"},
    {id: 3, title: "Ruby", body: "c"}
  ])

const [selectedSort, setSelectorSort] = useState("")

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectorSort(sort)
    setPosts([...posts].sort((a,b ) => a[sort].localeCompare(b[sort])))
    console.log(sort)
  }

  return (
    <div className="App">
      <hr style={{margin : "15px 0"}}/>
      <div>
      <MySelect
        value={selectedSort}
        onChange={sortPost}
      defaultValue={"Sort"}
      option={[
        {value : "title" , name : "По названию"},
        {value : "body" , name : "По описанию"}
      ]}
      />
      </div>

      <PostForm create={createPost}/>
      {posts.length !== 0 ?
        <Postlist remove={removePost} posts={posts}
                  title={"This My new React"}/>
        : <h1 style={{textAlign: "center"}}> POST NOT FOUND</h1>


      }

      <Counters/>
    </div>
  )
}

export default App

