import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


const MyPosts = (props) => {

let postElements = 
props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />
  )
/* создаем ref */
let newPostElement = React.createRef();

/* добавить пост на страницу */
let addPost = () => {
  props.addPost();
 //props.dispatch(addPostActionCreator());
}

/* добавить пост в State NewPostText */
let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
 //let action = updateNewPostTextActionCreator(text);
  //props.dispatch(action);
}

  return (
    <div className={s.postsBlock}>
     <h3> My posts</h3>
      <div>
        <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add post</button>

      </div>
      <div className={s.posts}>
     {postElements}
      </div>
    </div>
  )

}

export default MyPosts;