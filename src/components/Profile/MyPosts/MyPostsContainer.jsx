import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();

/* добавить пост на страницу */
let addPost = () => {
 props.store.dispatch(addPostActionCreator());
}

/* добавить пост в State NewPostText */
let onPostChange = (text) => {
 let action = updateNewPostTextActionCreator(text);
  props.store.dispatch(action);
}

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText} />
  )

}

export default MyPostsContainer;