import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
     <h3> My posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='hello, how are you' />
        <Post message="it's my first post" />
     
      </div>
    </div>
  )

}

export default MyPosts;