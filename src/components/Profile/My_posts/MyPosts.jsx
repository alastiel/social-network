import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './My_post/MyPost'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength = maxLengthCreator(300)

const MyPosts = (props) => {

    let myPosts = props.myPostData.map((p) => <MyPost key={p.id} message={p.message} likesKounts={p.likesKounts}
                                                      id={p.id}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className={s.postBlock}>
                <div className={s.item}>
                    <h3> My post</h3>
                </div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.item}>
                {myPosts}
            </div>
        </div>
    );
}
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength]} component={Textarea} name={'newPostText'} placeholder={'enter you post'}/>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'profileAddPostForm' // a unique name for this form
})(AddPostForm);




export default MyPosts;