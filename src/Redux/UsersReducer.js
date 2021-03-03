import {userAPI} from "../Api/Api";

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_SUBSCRIBE_PROGRESS = 'TOGGLE_IS_SUBSCRIBE_PROGRESS';

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    subscribeInProgress: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_SUBSCRIBE_PROGRESS:
            return {
                ...state,
                subscribeInProgress: action.subscribeInProgress
                    ? [...state.subscribeInProgress, action.userId]
                    : state.subscribeInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const subscribe = (userId) => ({type: SUBSCRIBE, userId})
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleSubscribeProgress = (subscribeInProgress, userId) => ({
    type: TOGGLE_IS_SUBSCRIBE_PROGRESS,
    subscribeInProgress,
    userId
})

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}
export const unsubscribeUser = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscribeProgress(true, id));
        userAPI.unsubscribeUser(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(unsubscribe(id))
            }
            dispatch(toggleSubscribeProgress(false, id));
        });
    }
}
export const subscribeUser = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscribeProgress(true, id));
        userAPI.subscribeUser(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(subscribe(id))
            }
            dispatch(toggleSubscribeProgress(false, id));
        });
    }
}

export default usersReducer;