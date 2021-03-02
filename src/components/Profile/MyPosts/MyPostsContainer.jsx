import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;