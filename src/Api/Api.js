import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '5d1464bc-31a7-4aee-8417-5639496e4205'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            // мы возвращаем таким образом в ответе только data без излишней информации
            .then(response => {
                return response.data
            });
    },
    subscribeUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    unsubscribeUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`Profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`Profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`Profile/status`, {status: status})
            .then(response => {
                return response.data
            });
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email, password, rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}



