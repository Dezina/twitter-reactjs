import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminProducts from './components/AdminProducts';
import AdminProductState from './context/AdminnProductContext/AdminProductState';
import Twitter from './components/Twitter';
import Posts from './components/Posts';


function App() {

  return (

    <Router>

      <AdminProductState>
        <Switch>

          {/* <Route path="/" exact component={AdminProducts} /> */}
          <Route path="/" exact component={Twitter} />
          <Route path="/posts" exact component={Posts} />
        </Switch>
      </AdminProductState>

    </Router>
  );

}

export default App;
