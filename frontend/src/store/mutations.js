export function setUser(state, user) {
    state.user.data = user;
}

export function setToken(state, token) {
    state.user.token = token;
    if (token) {
        sessionStorage.setItem('TOKEN', token);
    } else {
        sessionStorage.removeItem('TOKEN')
    }
}

export function setProducts(state, [loading, products]) {
    state.products.loading = false;

    state.products.data = products;
}
