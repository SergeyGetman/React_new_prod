import React from 'react';
import Postitem from "./Postitem";

const Postlist = ({posts, title}) => {


  return (
    <div>
      <h1 style={{textAlign : "center"}} >{title}</h1>
      {posts.map((post, index ) =>
        <Postitem number={index + 1} key={post.id} post={post}/>
      )}

      <br/>


    </div>
  );
};

export default Postlist;