import React, {useMemo, useState} from "react";
import Counters from "./components/Counters";
import "./components/styles/App.css"
import Postitem from "./components/Postitem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import Posfilter from "./components/Posfilter";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "FartRooN", body: "asd"},
    {id: 2, title: "JS", body: "123"},
    {id: 3, title: "Ruby", body: "c"}
  ])

const [filter, setFilter] = useState({sort : "", query : ""})



  const sortedPost = useMemo(() => {
    console.log("отработала фун-я sorted")
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts

  }, [filter.sort, posts])


  const sortedAndSearcedPost = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <hr style={{margin: "15px 0"}}/>
    <Posfilter filter={filter} setFilter={setFilter}/>

      <PostForm create={createPost}/>
      {sortedAndSearcedPost.length !== 0 ?
        <Postlist remove={removePost} posts={sortedAndSearcedPost}
                  title={"This My new React"}/>
        : <h1 style={{textAlign: "center"}}> POST NOT FOUND</h1>


      }

      <Counters/>
    </div>
  )
}

export default App

