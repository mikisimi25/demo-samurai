import React from 'react';
const { default: profileReducer, addPostActionCreator, deletePost } = require("./profileReducer");

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', countLike: 15 },
        { id: 2, message: 'It is my first post', countLike: 26 }
    ]
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
}); 

test('messagge of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
}); 

test('after deleting length of messagges should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldn´t be decrement if id es incorrect', () => {
    //1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
}); 