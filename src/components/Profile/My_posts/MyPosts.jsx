import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './My_post/MyPost'

const MyPosts = () => {

    let myPostData = [
        {id: 1, message: 'Hello it is my Network', likesKounts: 0},
        {id: 2, message: 'I love Java Script and react', likesKounts: 12},
        {id: 3, message: 'It is my first post', likesKounts: 10}
    ]

    let myPosts = myPostData.map((p) => <MyPost message={p.message} likesKounts={p.likesKounts} id={p.id}/>)

    return (
        <div>
            <div className={s.postBlock}>
                <div className={s.item}>
                    <h3> My post</h3>
                </div>
                <div>
                    <textarea className={s.textArea} name="" id="" cols="100" rows="3"></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.item}>
                {myPosts}
            </div>
        </div>
    );

}

export default MyPosts;