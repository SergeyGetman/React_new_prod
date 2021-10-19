import React from 'react';

const Postitem = (props) => {
  console.log(props)
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <br/>
        <div className="post__btns">

          <button>DELETE</button>

        </div>
      </div>
    </div>
  );
};

export default Postitem;