import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, subscribeAC, unsubscribeAC} from "../../Redux/UsersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscribeAC(userId));
        },
        unsubscribe: (userId) => {
            dispatch(unsubscribeAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);