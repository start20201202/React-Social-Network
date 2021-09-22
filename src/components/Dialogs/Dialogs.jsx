import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    /* создаем ref */
let newMessageElement = React.createRef();

/* добавить сообщение на страницу */
let addMessage = ()=> {
    props.addMessage();
    }
    
/* добавить сообщение в State NewPostText */
    let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea onChange={onMessageChange} ref={newMessageElement}  value={props.newMessagesText} ></textarea>
                <button onClick={addMessage}>add message</button>
          </div>
             
        </div>
    )
}

export default Dialogs;