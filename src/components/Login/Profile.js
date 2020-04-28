import React from 'react';
import { connect } from 'react-redux';
const Index = (props) => {
    return (
        <div>
            name : {props.viaFacebook.name}
            <br/>
            picture : <img src={props.viaFacebook.picture && props.viaFacebook.picture.data.url}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        viaFacebook: state.login.viaFacebook
    }
}

export default connect(mapStateToProps)(Index);