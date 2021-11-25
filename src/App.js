import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import Counters from "./components/Counters";
import "./components/styles/App.css"
import Postitem from "./components/Postitem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import Posfilter from "./components/Posfilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/Post.Service";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearcedPost = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = getPagesArray(totalPages)
  console.log(pagesArray)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
   const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))

  })

  console.log(totalPages)

  useEffect(() => {
    fetchPosts().then((response) => {
      console.log(response)
    })
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <button onClick={fetchPosts}>Post put</button>
      <MyButton onClick={() => setModal(true)}> Create Post</MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        {<PostForm create={createPost}/>}</MyModal>
      <hr style={{margin: "15px 0"}}/>
      <Posfilter filter={filter} setFilter={setFilter}/>
      {postError && <h1>произошла ошибка {postError}</h1>}
      {isPostsLoading ?
        <div style={{display: "flex", justifyContent: "center"}}><Loader/>
        </div> :
        <Postlist remove={removePost} posts={sortedAndSearcedPost}
                  title={"Can you try create post ?"}/>
      }
      <div className="page__wrapper">
        {pagesArray.map(p =>

          <span
            onClick={() => setPage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}

          >{p}</span>
        )}
      </div>


      }

      <Counters/>
    </div>
  )
}

export default App

