import {rerenderAllUI} from "../render";

let state = {
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
    }
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesKounts: 0
    }
    state.profilePage.myPostData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderAllUI(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderAllUI(state);
    }

export default state;