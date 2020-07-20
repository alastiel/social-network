// import dialogReduser from "./DialogReduser";
// import profileReduser from "./ProfileReduser";
//
// let store = {
//     _callSubscriber() {
//     },
//     _state: {
//         profilePage: {
//             myPostData: [
//                 {id: 1, message: 'Hello it is my Network', likesKounts: 0},
//                 {id: 2, message: 'I love Java Script and react', likesKounts: 12},
//                 {id: 3, message: 'It is my first post', likesKounts: 10}
//             ],
//             newPostText: ''
//         },
//         messagePage: {
//             dialogs: [
//                 {id: 1, name: 'Anya'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Nastya'},
//                 {id: 4, name: 'Oleg'},
//                 {id: 5, name: 'Egor'},
//             ],
//             messages: [
//                 {id: 1, messages: 'Hello'},
//                 {id: 2, messages: 'How are yuo'},
//                 {id: 3, messages: 'Pepega is coming'},
//                 {id: 4, messages: 'Turn around, he is behind you'},
//             ],
//             newMessageText: ''
//         }
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//         this._state.messagePage = dialogReduser(this._state.messagePage, action);
//         this._state.profilePage = profileReduser(this._state.profilePage, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;