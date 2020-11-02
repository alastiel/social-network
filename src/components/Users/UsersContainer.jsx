import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    subscribeUser,
    unsubscribeUser
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



//контейнерная компонента 2 вложенная внутри кк1
class UsersAPIComponent extends React.Component {
    // конструктор вызывается только 1 раз в момент создания компоненты, при последующих перерисовках он вызываться не будет
    // конструктор можно не писать, если мы не даём ему дополнителных функций кроме super, передача пропсов происходит автоматически в React.Component
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    // метод рендер должен быть в каждой классовой компоненте
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                subscribeInProgress={this.props.subscribeInProgress}
                subscribeUser={this.props.subscribeUser}
                unsubscribeUser={this.props.unsubscribeUser}
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
        setCurrentPage,
        getUsers, subscribeUser,
        unsubscribeUser
    })(UsersAPIComponent);