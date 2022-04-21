import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Box, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import Plan from "./component/Plan/Plan";
import Condition from "./component/Condition/Condition";
import Press from "./component/Monitoring/Press";
import TagSelect from "./component/TagGraph/TagSelect";
import Performance from "./component/Performance/Performance";
import Login from "./component/Login/LoginApp";
import Dashboard from "./component/Dashboard/Dashboard";
import Error4040 from "./component/error/Error404";
import Layout from "./component/Frame/Layout";

class App extends Component {
  constructor() {
    super(arguments);
    this.openTime = new Date();
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/condition" element={<Condition />} />
              <Route
                path="/monitoring"
                element={<Press openTime={this.openTime} />}
              />
              <Route
                path="/tagTrend"
                element={<TagSelect openTime={this.openTime} />}
              />
              <Route path="*" element={</*Main*/ Error4040 />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
