import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
debugger
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://i.imgur.com/j0lXfVH.png',
                    subscribed: true,
                    name: 'Nastya',
                    status: 'I am true',
                    location: {city: 'Petersburg', country: 'Russia'}
                },
                {
                    id: 2,
                    photoURL: 'https://avatarfiles.alphacoders.com/756/thumb-75602.jpg',
                    subscribed: true,
                    name: 'Katya',
                    status: 'Welcome in my...',
                    location: {city: 'Petersburg', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWDkX5cA_txgiDyD9Ac46P11GMoL6mCRfGLg&usqp=CAU',
                    subscribed: false,
                    name: 'Nikita',
                    status: 'So very HARD!',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoURL: 'https://avatarfiles.alphacoders.com/783/78344.jpg',
                    subscribed: false,
                    name: 'Sten',
                    status: 'Hello World!',
                    location: {city: 'Las Vegas', country: 'USA'}
                },
            ]
        )
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.image} src={u.photoURL} alt=""/>
                        </div>
                        <div>
                            {u.subscribed
                                ? <button onClick={() => {
                                    props.unsubscribe(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.subscribe(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    )
}

export default Users;