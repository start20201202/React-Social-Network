import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				{/* <Profile /> */}
				<div className="app-wrapper-content">
					<Route
						path="/dialogs"
						render={() => (
							<Dialogs
								state={props.state.dialogsPage}
								dispatch={props.dispatch}
								/* updateNewMessageText={props.updateNewMessageText} */
							/>
						)}
					/>
					<Route
						path="/profile"
						render={() => (
							<Profile
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
