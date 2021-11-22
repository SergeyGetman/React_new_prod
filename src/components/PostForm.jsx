import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
  const [post, setPost] = useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id : Date.now()
    }
    create(newPost)
    setPost({title: "", body: ""})
  }

  return (

      <form>
        {/*Управляемый компонент*/}
        <MyInput
          type="text"
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder="название поста"
          value={post.title}
        />
        {/*неуправляемый ком-т*/}

        <MyInput
          type="text"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder="описание поста"
        />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>

  );
};

export default PostForm;