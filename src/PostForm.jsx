import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { addPost, updatePost } from '../redux/postsSlice';
import { addPost , updatePost } from './Thunk';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postToEdit = useSelector(state => state.posts.posts.find(post => post.id === parseInt(id)));

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost({ id: parseInt(id), title, content }));
    } else {
      dispatch(addPost({ title, content }));
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Post' : 'Add Post'}</h2>
      <label>
        Title: </label><br/><br/>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
     <br/><br/>
      <label>
        Content: </label><br/><br/>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
     <br/><br/>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;