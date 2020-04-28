import React from "react";
import FacebookLogin from "react-facebook-login";
const FacebookLogin2 = () => {
  const handleClick = (response) => {
      console.log(response)
  };
  const responseFacebook = (response) => {
      
      console.log(response);
  };
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOKID}
      
      fields="name, picture"
      onClick={handleClick}
      callback={responseFacebook}
    />
  );
};

export default FacebookLogin2;
