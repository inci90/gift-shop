import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';


export default class Google extends Component{
  /*the data we'll be grabbing from the google auth object*/
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }

  responseGoogle= response => {
    /* test we recieved the auth object*/
    console.log("Hello " + response.name + " Welcome");
    console.log(response);
  }

  componentClicked = () => console.log("clicked");

  render() {
    let googleContent;

    if(this.state.isLoggedIn){
      googleContent = (<GoogleLogin
        clientId=""
        buttonText= "Logout"
        autoLoad= ""
        onSuccess= ""
        onFailure= "" />)
      /* console.log(localStorage.getItem("loginData").name); */
      /* client ID is registed with googleAUth. set autoLoad to true to autologin*/
    } else {
      googleContent = (<GoogleLogin
        clientId="840926923902-a6mbee0n6srst13qb90eseeplf42r88a.apps.googleusercontent.com"
        buttonText="Login with Google"
        autoLoad="false"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle} />)
    }

    return (
      <div>
        <div className="logged-in go">Logged in as Fernando</div>
        {/* render the button*/}
        {googleContent}
      </div>
    )
  }
}
