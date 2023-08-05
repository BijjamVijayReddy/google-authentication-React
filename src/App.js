import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle, } from 'reactjs-social-login';
import './App.css';


function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [picture, setPicture] = useState()

  return (
    <div className="App">
      {name ? (<p>Login as </p>) : (<p>Click on the Google Button</p>)}
      {picture ? (<img src={picture}  alt="profile"/> || null) : null}
      {name ? (<h3> Welcome  { }{name}  </h3>) : null}
      {email ? (<h3> Your Email Id Login as  { }{email}  </h3>) : null}


      <LoginSocialGoogle
        client_id={process.env.REACT_APP_GOOGLE_AUTH_API}
        // onLoginStart={onLoginStart}
        // redirect_uri={REDIRECT_URI}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data)
          setName(data.name);
          setEmail(data.email)
          setPicture(data.picture)
          console.log(data.picture)
        }}
        onReject={err => {
          console.log(err);
        }}
      >
        <GoogleLoginButton className="GoogleButton" />
      </LoginSocialGoogle>
    </div>
  );
}

export default App;
