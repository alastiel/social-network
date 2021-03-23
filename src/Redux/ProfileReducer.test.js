import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";

let state = {
    myPostData: [
        {id: 1, message: 'Hello it is my Network', likesKounts: 0},
        {id: 2, message: 'I love Java Script and react', likesKounts: 12},
        {id: 3, message: 'It is my first post', likesKounts: 10}
    ]
};

test('length of post should be incremented', () => {
    //1. исходные данные
    let action = addPostActionCreator('new text')
    //2. действие
    let newState = profileReducer(state, action)
    //3. ожидание что
    expect(newState.myPostData.length) .toBe(4);
});

test('message of post should be correct', () => {
    //1. исходные данные
    let action = addPostActionCreator('new text')
    //2. действие
    let newState = profileReducer(state, action)
    //3. ожидание что
    expect(newState.myPostData[3].message) .toBe('new text');
});

test('likesKounts of post should be 0', () => {
    //1. исходные данные
    let action = addPostActionCreator('new text')
    //2. действие
    let newState = profileReducer(state, action)
    //3. ожидание что
    expect(newState.myPostData[3].likesKounts) .toBe(0);
});

test('after deleting length of message should be decrement ', () => {
    //1. исходные данные
    let action = deletePost(1)
    //2. действие
    let newState = profileReducer(state, action)
    //3. ожидание что
    expect(newState.myPostData.length) .toBe(2);
});

test('after deletion, the message length should not be reduced if an incorrect  id ', () => {
    //1. исходные данные
    let action = deletePost(100)
    //2. действие
    let newState = profileReducer(state, action)
    //3. ожидание что
    expect(newState.myPostData.length) .toBe(3);
});
