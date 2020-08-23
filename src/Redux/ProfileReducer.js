const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myPostData: [
        {id: 1, message: 'Hello it is my Network', likesKounts: 0},
        {id: 2, message: 'I love Java Script and react', likesKounts: 12},
        {id: 3, message: 'It is my first post', likesKounts: 10}
    ],
    newPostText: ''
};    

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesKounts: 0
            };
            return {
                ...state,
                myPostData: [...state.myPostData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
        
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;