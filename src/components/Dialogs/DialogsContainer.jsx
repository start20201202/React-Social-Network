import React from "react";
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAutoRedirect } from "./../hoc/withAuthRedirect";
import {compose} from "redux";


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





export default compose (
connect(
	mapStateToProps,
	mapDispatchToProps
),
withAutoRedirect

)(Dialogs);
