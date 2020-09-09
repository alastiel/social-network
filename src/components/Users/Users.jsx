import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../image/default_avatar.png"


// Users будет иметь все методы и свойства React.Component
class Users extends React.Component {
    // конструктор вызывается только 1 раз в момент создания компоненты, при последующих перерисовках он вызываться не будет
    // конструктор можно не писать, если мы не даём ему дополнителных функций кроме super, передача пропсов происходит автоматически в React.Component
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    // метод рендер должен быть в каждой классовой компоненте
    render() {
        // Math.ceil - округляет число в большую сторону
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.pageNumber}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {this.props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.subscribed
                                ? <button className={s.button} onClick={() => {
                                    this.props.unsubscribe(u.id)
                                }}>UNSUBSCRIBE</button>
                                : <button className={s.button} onClick={() => {
                                    this.props.subscribe(u.id)
                                }}>SUBSCRIBE</button>}
                        </div>
                    </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                </div>)}
        </div>
    }
}


export default Users;