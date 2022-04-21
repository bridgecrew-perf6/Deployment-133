import React, { Component } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error4040 from "../../component/error/Error404";
import LoginForm from "./LoginForm";
import Lottie from 'react-lottie';
import animationData from './bgdata.json';
import { Box, Button, chakra, Flex, HStack } from "@chakra-ui/react";

class LoginApp extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <Flex px={4} py={50} mx="auto" pos="relative" >
          <Box zIndex={-1}  mx="auto" pos="absolute" top={0} left={0} style={{width:'100vh', height: '100vh'}}>
            <Lottie options={defaultOptions}/>
          </Box>
          <Box mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }} alignItems='center'  color='white'>
          <LoginForm/>
        </Box>
      </Flex>
    );
  }
}

export default LoginApp;
