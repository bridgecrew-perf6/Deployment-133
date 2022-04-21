import React from "react";
import LoginImage from './LoginImage';
import Login from './Login';

export default function LoginForm(){  
    return (
        <div style={{
            minWidth: 500,
            maxWidth: '50%',
            minHeight: 300,
            maxHeight: '50%',
            alignItems: 'center',
            margin: 'auto',
            display:"flex",
            backgroundColor: 'white',
            borderRadius:'5px',
            boxShadow: "-10px 10px 40px -20px black" }}
        >
            <LoginImage/>
            <Login />
        </div>
    );
  
}
