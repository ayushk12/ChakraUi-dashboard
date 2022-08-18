import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import LandingLayout from "./LandingLayout";
import OrderManage from "./OrderManage";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./Portfolio/Portfolio";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Page-1";
import Contact from "./pages/Page-2";
import Testimonial from "./pages/Page-3";

export default function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <Route path="/" exact component={LandingLayout} />
              <Route path="/Overview" exact component={OrderManage} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/testimonial" component={Testimonial} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}
