import React from "react";
import { Router, Route, Switch,link, NavLink } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import AppPage from "../components/AppPage"
import Polls from "../components/Polls"
import Circles from "../components/Circles"
import Notice from "../components/Notice"
import Photos from "../components/Photos"
import Error from "../components/error";
import Create from "../components/Create";
import PrivateRoute from "./PrivateRoute";
import Noticebox from "../components/Noticebox"
import Signin from "../components/Signin"
import SignUp from "../components/Signup";
import Mydoodle from "../components/Mydoodle";
import Mydoodlehistory from "../components/mydoodlehistory";
import Directory from "../components/Directory";
import Discover from "../components/Discover";
import Chat from "../components/Chat";
import Users from "../components/Users";
import Groups from "../components/Groups";
import Help from "../components/help";
import Payment from "../components/Payment"
import Payment2 from "../components/paymentPage2";
import Payment3 from "../components/paymentPage3";
import Payment4 from "../components/paymentPage4"

export const history=createHistory();

const Routes =()=>{

        return (

            <Router history={history} >
                <Switch>
                    <Route path="/" component={Signin} exact={true} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/conversation" component={AppPage}  exact={true} />
                    <PrivateRoute path="/groups" component={Circles} />
                    <PrivateRoute path="/polls" component={Polls}/>
                    <PrivateRoute path="/notice" component={Notice}/>
                    <PrivateRoute path="/photos" component={Photos} />
                    <PrivateRoute path="/conversation/create" component={Create} />
                    <PrivateRoute path="/mydoodle" component={Mydoodle} exact={true}/>
                    <PrivateRoute path="/mydoodle/history" component={Mydoodlehistory}/>
                    <PrivateRoute path="/notification" component={Noticebox} />
                    <PrivateRoute path="/conversation/directory" component={Directory}/>
                    <PrivateRoute path="/discover" component={Discover}/>
                    <PrivateRoute path="/users" component={Users}/>
                    <PrivateRoute path="/conversation/chat" component={Chat}/>
                    <PrivateRoute path="/class" component={Groups}/>
                    <PrivateRoute path="/payment" component={Payment} exact={true}/>
                    <PrivateRoute path="/payment/page2" component={Payment2}/>
                    <PrivateRoute path="/payment/page3" component={Payment3}/>
                    <PrivateRoute path="/payment/page4" component={Payment4}/>
                    
                    <Route component={Error} />

                </Switch>
            </Router>
        )
    }

export default Routes;

//<PrivateRoute Path="/help" component={Help}/>