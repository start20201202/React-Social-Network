import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducers";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
	profilePage: dialogsReducer,
	dialogsPage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
