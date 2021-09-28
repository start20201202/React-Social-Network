let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 11 },
				{ id: 3, message: "Blabla", likesCount: 11 },
				{ id: 4, message: "Dada", likesCount: 11 },
			],
			newPostText: "it-kamasutra.com",
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Dimych" },
				{ id: 2, name: "Andrew" },
				{ id: 3, name: "Sveta" },
				{ id: 4, name: "Sasha" },
				{ id: 5, name: "Viktor" },
				{ id: 6, name: "Valera" },
			],
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How is your it-kamasutra?" },
				{ id: 3, message: "Yo" },
				{ id: 4, message: "Yo" },
				{ id: 5, message: "Yo" },
			],
		},
		sidebar: {},
	},
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
		if (action.type === "ADD-POST") {
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
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			/* добавить новый пост */
			this._state.profilePage.newPostText = action.newText;
			/* перерисовать страницу */
			this._callSubscriber(this._state);
		}
	},
};

export default store;
window.store = store;
