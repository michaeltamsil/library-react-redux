const initialState = {
    data: [],
    isShowAdd: false
}

const libraries = (state = initialState, action) => {
    switch (action.type){
        case 'LIBRARIES_ADD':
            return {...state, data: [...state.data, action.payload]};

        case 'LIBRARIES_DELETE_DATA':
            const data = state.data.filter((item) => {
                if (item.id == action.payload)
                    return false;
                return true;
            })
            
            return {...state, data: data}

        case 'LIBRARIES_GET_DATA':
            return {...state, data: action.payload}

        case 'LIBRARIES_HIDE_ADD':
            return {...state, isShowAdd: false};

        
        case 'LIBRARIES_SHOW_ADD':
            return {...state, isShowAdd: true};
        default:
            return state;
    }
}

export default libraries;