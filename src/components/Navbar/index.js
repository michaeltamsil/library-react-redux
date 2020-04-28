import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { logout } from './../../actioncreators/login';
const Index = (props) => {
  let linkUrlLogin;
  const [data, setData] = useState();
  const [viewLogin, setViewLogin] = useState();

  const logout = () => {
    props.logout();
  }

  useEffect(() => {
    console.log('useEffect')
    console.log(props.loginViaFacebook.id)
    if (props.loginViaFacebook && props.loginViaFacebook.id ) {
      console.log('halo')
      linkUrlLogin = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/libraries">
            Libraries
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">
            Students
          </Link>
        </li>
      </>
      );
      setViewLogin(<Link className="nav-link" onClick={logout}>Logout</Link>)
      setData(linkUrlLogin)
    } else {
      setData();
      setViewLogin(<Link className="nav-link" to="/login">Login</Link>)
    }
  }, [props.loginViaFacebook])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        School
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          { data }
        </ul>
          { viewLogin }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state.library)
  console.log('tampilkan data library');
  return {
    loginViaFacebook : state.login.viaFacebook
  }
}

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Index);
