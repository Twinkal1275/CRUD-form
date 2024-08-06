import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deletePost } from '../redux/postsSlice';
import { deletePost } from './Thunk';

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className='edittt'>
      <h1>Posts</h1>
      <Link to="/add" className='addd'>Add New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`} className='eddd'>Edit</Link>
            <button onClick={() => handleDelete(post.id)} className='dee'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;