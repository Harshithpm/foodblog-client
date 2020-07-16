import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostGrid from './components/PostGrid';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://foodblog-api.herokuapp.com/posts')
      .then((data) => data.json())
      .then((res) => {
        const newPosts = res;
        setPosts(newPosts);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <PostGrid posts={posts} />
    </div>
  );
}

export default App;
