import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchPosts } from './redux/postsSlice';
import { fetchPosts } from './Thunk';
import PostList from './PostList';
import PostForm from './PostForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
    </Router>
  );
};

export default App;