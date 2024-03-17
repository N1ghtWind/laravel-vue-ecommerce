import axiosClient from "../axios";

export function getUser({commit}, data) {
    return axiosClient.get('/user', data)
        .then(({data}) => {
            commit('setUser', data);
            return data;
        })
}

export function login({commit}, data) {
    return axiosClient.post('/login', data)
        .then(({data}) => {
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
        })
}

export function logout({commit}) {
    return axiosClient.post('/logout')
        .then((response) => {
            commit('setToken', null)

            return response;
        })
}


export function getProducts({commit}, data) {
    commit('setProducts', [true]);
    return axiosClient.get('/product', data)
        .then(({data}) => {
            commit('setProducts', [false, data]);
            return data;
        })
        .catch((error) => {
            commit('setProducts', [false]);
            return error;
        })
}
