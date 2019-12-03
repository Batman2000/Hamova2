import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Meal from "./Meal";
import React from "react";
import App from "./App";
import Login from "./Login";
import User from "./components/User";
import adminRoutes from "./routes/admin/adminRoutes";


const Rout = (props) => {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/meal/:name" component={Meal} />
                <Route path="/admin" component={adminRoutes} />
            </React.Fragment>
        </Router>
    );
}

export default Rout;