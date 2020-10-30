import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    subscribe,
    toggleIsFetching, toggleSubscribeProgress,
    unsubscribe
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../Api/Api";


//контейнерная компонента 2 вложенная внутри кк1
class UsersAPIComponent extends React.Component {
    // конструктор вызывается только 1 раз в момент создания компоненты, при последующих перерисовках он вызываться не будет
    // конструктор можно не писать, если мы не даём ему дополнителных функций кроме super, передача пропсов происходит автоматически в React.Component
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.toggleIsFetching(true)
        //getUsers находится в Api и делает запросы на сервер, здесь мы передаём в неё необходимые параметры
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                toggleSubscribeProgress={this.props.toggleSubscribeProgress}
                subscribeInProgress={this.props.subscribeInProgress}
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
        isFetching: state.usersPage.isFetching,
        subscribeInProgress: state.usersPage.subscribeInProgress
    }
}


export default connect(mapStateToProps,
    {
        subscribe, unsubscribe, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleSubscribeProgress
    })(UsersAPIComponent);