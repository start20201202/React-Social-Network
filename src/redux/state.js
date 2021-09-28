const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
	/* добавить сообщение на страницу */

	/* уведомить подписчика */
	_callSubscriber() {
		console.log("state changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	/* добавить сообщение на страницу */
	addMessage() {
		let newMessage = {
			id: 6,
			message: this._state.dialogsPage.newMessagesText,
		};
		/* добавить пост */
		this._state.dialogsPage.messages.push(newMessage);
		/* обнулить поле */
		this._state.dialogsPage.newMessagesText = " ";
		/* перерисовать страницу */
		this._callSubscriber(this._state);
	},
	/* добавить сообщение в State newMessagesText */
	updateNewMessageText(newMessage) {
		/* добавить новый пост */
		this._state.dialogsPage.newMessagesText = newMessage;
		/* перерисовать страницу */
		this._callSubscriber(this._state);
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			/* добавить пост */
			this._state.profilePage.posts.push(newPost);
			/* обнулить поле */
			this._state.profilePage.newPostText = " ";
			/* перерисовать страницу */
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			/* добавить новый пост */
			this._state.profilePage.newPostText = action.newText;
			/* перерисовать страницу */
			this._callSubscriber(this._state);
		}
	},

	export const addPostActionCreator = ()=>({
		  type: ADD_POST
	  }),
	export const updateNewPostTextActionCreator = (text)=>{
		return{
			type: UPDATE_NEW_POST_TEXT, newText: text
		}
	  }
};

export default store;
window.store = store;
