import axios from 'axios';

const url = 'http://localhost:3500/libraries';

export const add = (data) => {
    
    // return dispatch => {
        // axios.post(url, data)
        //     .then((response)=> {
        //         dispatch({
        //             type: 'LIBRARIES_ADD',
        //             payload: response.data
        //         })
        //     })
    // })
    return async(dispatch) => {
        const response = await axios.post(url, data);
        dispatch({ 
            type: 'LIBRARIES_ADD',
            payload: response.data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_ADD'
        })
    }
}

export const deleteData = (id) => {
    return async(dispatch) => {
        await axios.delete(`${url}/${id}`);
        
        dispatch({ 
            type: 'LIBRARIES_DELETE_DATA',
            payload: id
        })
    }
}

export const getData = () => {
    return async(dispatch) => {
        const response = await axios.get(url);
        dispatch({ 
            type: 'LIBRARIES_GET_DATA',
            payload: response.data
        })
    }
}

export const hideAdd = () => {
    return {
        type: 'LIBRARIES_HIDE_ADD'
    }
}

export const showAdd = () => {
    return {
        type: 'LIBRARIES_SHOW_ADD'
    }
}