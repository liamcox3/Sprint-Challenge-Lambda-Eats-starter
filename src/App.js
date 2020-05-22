import React from "react";
import HomePage from "./components/HomePage";
import Form from "./components/Form";

import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Lambda Eats</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Form'>Order Here</Link>
            </nav>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='/Form'>
                <Form />
            </Route>
        </div>
    );
};
export default App;
