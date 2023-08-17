import api from "../axios.js";


export let isAuthenticated = !!localStorage.getItem('token')
export const loginUser = async (email, password) => {
    const res = await api.post(
        '/login',
        {email: email, password: password})
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err))
};




export const registerUser = async (name, username, email, password, passwordConfirmation) => {
    await api.post('register',
        {
            name: name,
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err.response.data.message))
}





export const logoutUser = async () => {
    let token = localStorage.getItem('token')
    console.log(token)
    await api.get('/logout', {headers: {'Authorization': `Bearer ${token}`}
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        localStorage.removeItem('token')
}