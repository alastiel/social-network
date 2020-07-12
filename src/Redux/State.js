
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
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesKounts: 0
        }
        this._state.profilePage.myPostData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            messages: this._state.messagePage.newMessageText
        }
        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

// let rerenderAllUI = () => {
// }
//
// let state = {
//     profilePage: {
//         myPostData: [
//             {id: 1, message: 'Hello it is my Network', likesKounts: 0},
//             {id: 2, message: 'I love Java Script and react', likesKounts: 12},
//             {id: 3, message: 'It is my first post', likesKounts: 10}
//         ],
//         newPostText: ''
//     },
//     messagePage: {
//         dialogs: [
//             {id: 1, name: 'Anya'},
//             {id: 2, name: 'Dima'},
//             {id: 3, name: 'Nastya'},
//             {id: 4, name: 'Oleg'},
//             {id: 5, name: 'Egor'},
//         ],
//         messages: [
//             {id: 1, messages: 'Hello'},
//             {id: 2, messages: 'How are yuo'},
//             {id: 3, messages: 'Pepega is coming'},
//             {id: 4, messages: 'stupid beach'},
//         ],
//         newMessageText: ''
//     }
// }
//
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesKounts: 0
//     }
//     state.profilePage.myPostData.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderAllUI(state);
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderAllUI(state);
// }
//
// export const addMessage = () => {
//     let newMessage = {
//         id: 5,
//         messages: state.messagePage.newMessageText
//     }
//     state.messagePage.messages.push(newMessage);
//     state.messagePage.newMessageText = '';
//     rerenderAllUI(state);
// }
//
// export const updateNewMessageText = (newText) => {
//     state.messagePage.newMessageText = newText;
//     rerenderAllUI(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderAllUI = observer;
// }

export default store;