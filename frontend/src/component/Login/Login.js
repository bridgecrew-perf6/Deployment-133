import React, { useState, useEffect } from "react";
import "../../../assets/css/login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FaUserCircle } from 'react-icons/fa';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPw: "",
      userName: "",
      isLogin: null,
    };
  }

  //아이디 입력창 관리
  handleID = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };
  //패스워드 입력창 관리
  handlePW = (e) => {
    this.setState({
      userPw: e.target.value,
    });
  };
  //로그인버튼 클릭시 서버로 데이터 전송
  handleSubmit = (e) => {
    // const navigate = useNavigate();
    
    //e.preventDefault();
    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("api/login", login_info)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.data === null) {
          alert("아이디 혹은 비밀번호를 확인하세요");
        } else {
          alert("로그인되었습니다");
          
          // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
          if (res.ACCESS_TOKEN) {
            localStorage.setItem("login-token", res);
          }
          //스테이트에 유저정보를 저장한다.
          this.setState({
            userId: res.data.userId,
            userName: res.data.userName,
            isLogin: true,
          });
          localStorage.setItem("login-token", res);
          
          // navigate("/");
          window.location = '/dashboard';
        }
      });
  };
  render() {
    return (
      <div style={{ 
        width: '40%',
        height: '40%',
        position: 'relative', left: '10%', top: '50%'
        }}>
        <FaUserCircle/>
        <header className="App-header">
        
          <h1 style={{color:"#4D99FF", textAlign:'center', fontSize:'1.5em'}}> WELCOME </h1>
          <div className="Login">
            
            
            <TextField
                required
                id="outlined-required"
                label="ID"
                defaultValue="ID"
                onChange={this.handleID}
                value={this.state.userId}
                style={{width:'100%'}}
              />
              <br/>
              
              <TextField
              variant="standard"
              margin="normal"
              required
              label="Password"
              type="password"
              onChange={this.handlePW}
              value={this.state.userPw}
              style={{width:'100%'}}
              />
             
            <div className="Button" style={{padding:"10%"}}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.handleSubmit();
                }}
                style={{
                  minWidth:80,
                  width:'100%',
                  backgroundColor:"#4D99FF"
                }}
              >
                Log In
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Login;
