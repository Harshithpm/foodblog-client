import React from 'react';
import Post from './Post';

function PostGrid(props) {
  return (
    <div className='grid-container'>
      {props.posts.length
        ? props.posts.map((post) => {
            return <Post title={post.title} body={post.body} />;
          })
        : () => {
            return <p>No posts!</p>;
          }}
    </div>
  );
}

export default PostGrid;
