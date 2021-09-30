import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
	profilePage: dialogsReducer,
	dialogsPage: profileReducer,
	sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
