const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Katya'},
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
        case ADD_MESSAGE:{
            let newMessage = {
                id: 5,
                messages: state.newMessageText,
            };
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.newMessageText = '';
            stateCopy.messages.push(newMessage);
            return stateCopy;
        }
        case ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addUpdateNewMessageTextActionCreator = (text) => ({
    type: ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR,
    newText: text
})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogReducer;