import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    subscribe,
    toggleIsFetching,
    unsubscribe
} from "../../Redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

//контейнерная компонента 2 вложенная внутри кк1
class UsersAPIComponent extends React.Component {
    // конструктор вызывается только 1 раз в момент создания компоненты, при последующих перерисовках он вызываться не будет
    // конструктор можно не писать, если мы не даём ему дополнителных функций кроме super, передача пропсов происходит автоматически в React.Component
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    // метод рендер должен быть в каждой классовой компоненте
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unsubscribe={this.props.unsubscribe}
                subscribe={this.props.subscribe}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

//контейнерная компонента 1
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {subscribe, unsubscribe, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);