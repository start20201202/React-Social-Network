import { rerenderEntireTree } from "../render";

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
	},
	sidebar: {},
};

window.state = state;

/* добавить сообщение на страницу */
export let addPost = () => {
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

/* добавить сообщение в State NewPostText */
export let updateNewPostText = (newText) => {
	/* добавить новый пост */
	state.profilePage.newPostText = newText;
	/* перерисовать страницу */
	rerenderEntireTree(state);
};

export default state;
