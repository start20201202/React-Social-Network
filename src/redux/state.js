let rerenderEntireTree = () => console.log("state changed");

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likesCount: 12 },
			{ id: 2, message: "It's my first post", likesCount: 11 },
			{ id: 3, message: "Blabla", likesCount: 11 },
			{ id: 4, message: "Dada", likesCount: 11 },
		],
		newPostText: "it-kamasutra",
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
		newMessagesText: "hello it-kamasutra",
	},
	sidebar: {},
};

window.state = state;

/* добавить пост на страницу */
export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};
	/* добавить пост */
	state.profilePage.posts.push(newPost);
	/* обнулить поле */
	state.profilePage.newPostText = " ";
	/* перерисовать страницу */
	rerenderEntireTree(state);
};

/* добавить пост в State NewPostText */
export const updateNewPostText = (newText) => {
	/* добавить новый пост */
	state.profilePage.newPostText = newText;
	/* перерисовать страницу */
	rerenderEntireTree(state);
};

/* добавить сообщение на страницу */
export const addMessage = () => {
	let newMessage = {
		id: 6,
		message: state.dialogsPage.newMessagesText,
	};
	/* добавить пост */
	state.dialogsPage.messages.push(newMessage);
	/* обнулить поле */
	state.dialogsPage.newMessagesText = " ";
	/* перерисовать страницу */
	rerenderEntireTree(state);
};

/* добавить сообщение в State newMessagesText */
export const updateNewMessageText = (newMessage) => {
	/* добавить новый пост */
	state.dialogsPage.newMessagesText = newMessage;
	/* перерисовать страницу */
	rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;
