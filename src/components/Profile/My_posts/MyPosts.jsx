import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './My_post/MyPost'

const MyPosts = (props) => {

    let myPosts = props.myPostData.map((p) => <MyPost key={p.id} message={p.message} likesKounts={p.likesKounts} id={p.id}/>)
    let newPostText = props.newPostText;

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div className={s.postBlock}>
                <div className={s.item}>
                    <h3> My post</h3>
                </div>
                <div>
                    <textarea onChange={onPostChange}
                              value={newPostText}
                              ref={newPostElement}
                              className={s.textArea}
                              cols="100"
                              rows="3"
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.item}>
                {myPosts}
            </div>
        </div>
    );

}

export default MyPosts;