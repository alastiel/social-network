import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getSubscribeInProgress = (state) => {
    return state.usersPage.subscribeInProgress;
}

/*
Для сложных селекторов используется библиотека reselect

ПРОСТОЙ СЕЛЕКТОР
export const getUsers = (state) => {
    return state.usersPage.users;
}
ПРОСТОЙ СЕЛЕКТОР
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
СЛОЖНЫЙ СЕЛЕКТОР
export const getUsersSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => true)
})
Сложный селектор зависит от 2 простых getUsers и getIsFetching и если результаты этих простых селекторов
не изменились, то нет смысла перезапускать функция внутри сложного селектора
*/
