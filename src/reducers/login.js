const initialState = {
    viaFacebook: {}
}

const login = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN_VIA_FACEBOOK':
            return {...state, viaFacebook:action.payload}
        default:
            return state;
    }
}

export default login;