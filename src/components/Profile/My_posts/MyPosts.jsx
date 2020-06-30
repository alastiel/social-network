import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './My_post/MyPost'

const MyPosts = () => {
    return (
        <div>
            <div>
            <div className={s.item}>
                My post
            </div>
                <textarea name="" id="" cols="100" rows="3"></textarea>
                <button>add post</button>
            </div>
            <div className={s.item}>
                <MyPost message='Hello it is my Network' />
                <MyPost message='I love Java Script and react' />
                <MyPost message='It is my first post' />
            </div>
        </div>
    );

}

export default MyPosts;