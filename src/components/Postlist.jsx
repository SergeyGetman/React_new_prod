import React from 'react';
import Postitem from "./Postitem";

const Postlist = ({posts, title}) => {
  console.log(title)
  return (
    <div>
      <h1 style={{textAlign : "center"}}>{title}</h1>
      {posts.map(post =>
        <Postitem key={post.id} post={post}/>
      )}
      <br/>


    </div>
  );
};

export default Postlist;