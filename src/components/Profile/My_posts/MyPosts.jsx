import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './My_post/MyPost'


const MyPosts = (props) => {

    // let myPosts = myPostData.map((p) => <MyPost message={p.message} likesKounts={p.likesKounts} id={p.id}/>)
    let myPosts = props.myPostData.map((p) => <MyPost message={p.message} likesKounts={p.likesKounts} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postBlock}>
                <div className={s.item}>
                    <h3> My post</h3>
                </div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElement}
                              className={s.textArea}
                              cols="100"
                              rows="3"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.item}>
                {myPosts}
            </div>
        </div>
    );

}

export default MyPosts;