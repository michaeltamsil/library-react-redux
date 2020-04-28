import axios from 'axios';

const url = `${process.env.REACT_APP_URL_SERVER}/login`;

export const login = (data) => {
    axios.post(url, data)
    .then(response => {
    })
    .catch(error => {
        window.alert('ada kesalahan, coba lagi')
    })
}

export const logout = () =>{
    return {
        type: 'LOGIN_LOGOUT'
    }
}

export const loginViaFacebook = (data) => {
    return {
        type: 'LOGIN_VIA_FACEBOOK',
        payload: data
    }
}