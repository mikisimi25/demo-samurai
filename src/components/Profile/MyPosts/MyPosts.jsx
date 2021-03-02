import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostsForm from './Form/postsForm';

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(post => <Post message={post.message} countLike={post.countLike} key={post.id} />);

    return (
        <section>
            <PostsForm addPost={props.addPost} />
            <section className={s.posts}>
                {postsElements}
            </section>
        </section>
    )
});

export default MyPosts;