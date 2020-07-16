import React from 'react';

function Post(props) {
  return (
    <div className='grid-item'>
      <span className='post-title'>{props.title}</span>
      <hr />
      <span className='post-body'>{props.body}</span>
    </div>
  );
}

export default Post;
