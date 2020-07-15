const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                messages: state.newMessageText,
            };
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        case ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addUpdateNewMessageTextActionCreator = (text) =>
    ({type: ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR, newText:text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogReduser;