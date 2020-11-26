const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                messages: action.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer;