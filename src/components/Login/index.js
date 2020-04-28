import React, { useState } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { login, loginViaFacebook } from './../../actioncreators/login'

const Index = (props) => {
    const [data, setData] = useState({
        password: '',
        username: ''
    })
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data)
        props.login(data)
    }
    const componentClicked = () => {
        console.log('terklik')
    }

    const responseFacebook = (response) => {
        props.loginViaFacebook(data);
    }


    return (
        <div>
            <h1>Login</h1>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
            <form onSubmit={handleSubmit}>
                <label>
                    username: 
                    <input type="text" name="username" onChange={handleSubmit} value={data.username}/>
                </label>
                <br/>
                <label>
                    password : 
                    <input type="password" name="password" onChange={handleSubmit} value={data.password}/>
                </label>
                <br/>
                <button type="submit">Login</button>
                <button type="reset">reset</button>
            </form>

        </div>
    )
}

const mapDispatchToProps = { login, loginViaFacebook };

export default connect(null, mapDispatchToProps)(Index);