const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Anya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Egor'},
    ],
    messages: [
        {id: 1, messages: 'Hello'},
        {id: 2, messages: 'How are yuo'},
        {id: 3, messages: 'Pepega is coming'},
        {id: 4, messages: 'Turn around, he is behind you'},
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
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

export const addUpdateNewMessageTextActionCreator = (text) => ({type: ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR, newText:text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogReducer;