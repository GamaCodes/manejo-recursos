import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";

import Home from "./pages/home";

import Service from "./pages/service";
import About from "./pages/about";

import NotFound from "./pages/notFound";

import { ChakraProvider, theme } from "@chakra-ui/react";

class Router extends Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <div className="page-container">
            <div className="app">
              <Navbar />
              <Route
                render={({ location }) => {
                  return (
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/nosotros" component={About} />
                      <Route exact path="/servicios" component={Service} />
                      <Route component={NotFound} />
                    </Switch>
                  );
                }}
              />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default Router;
