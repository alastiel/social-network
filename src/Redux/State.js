const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            myPostData: [
                {id: 1, message: 'Hello it is my Network', likesKounts: 0},
                {id: 2, message: 'I love Java Script and react', likesKounts: 12},
                {id: 3, message: 'It is my first post', likesKounts: 10}
            ],
            newPostText: ''
        },
        messagePage: {
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
                {id: 4, messages: 'stupid beach'},
            ],
            newMessageText: ''
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesKounts: 0
            };
            this._state.profilePage.myPostData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                messages: this._state.messagePage.newMessageText,
            };
            this._state.messagePage.messages.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR) {
            this._state.messagePage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addUpdateNewMessageTextActionCreator = (text) =>
    ({type: ADD_UPDATE_NEW_MESSAGE_TEXT_ACTION_CREATOR, newText:text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})

export default store;