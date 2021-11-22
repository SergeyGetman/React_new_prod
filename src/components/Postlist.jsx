import React from 'react';
import Postitem from "./Postitem";

const Postlist = ({posts, title, remove}) => {
  if (!posts.length) {
    return (

      <h1 style={{textAlign: "center"}}> POST NOT FOUND</h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      {posts.map((post, index) =>
        <Postitem remove={remove} number={index + 1} key={post.id} post={post}/>
      )}
      <br/>
    </div>
  );
};

export default Postlist;