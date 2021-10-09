import React from "react";
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAutoRedirect } from "./../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
	};
};

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
});

let AuthRedirectComponent = withAutoRedirect(Dialogs);

const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
