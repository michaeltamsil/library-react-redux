import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Profile from './Profile';

const Index = (props) => {
    const [view, setView] = useState();

    useEffect(() => {
        if (props.viaFacebook && props.viaFacebook.id){
            setView(<Profile/>)
        }else {
            setView(<Login/>)
        }

    }, [props.viaFacebook])
    return (
        <>
        {view}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        viaFacebook: state.login.viaFacebook
    }
    
}

export default connect(mapStateToProps)(Index);