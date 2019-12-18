import React, {Fragment} from 'react';

// Import routing components
import {Route, Switch} from 'react-router-dom';

// Import custom components
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import PeopleContainer from '../containers/people/PeopleContainer';
import TeamsContainer from '../containers/teams/TeamsContainer';
import ChatContainer from '../containers/chat/ChatContainer';
import SettingsContainer from '../containers/settings/SettingsContainer';

import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import DefaultSnackbar from '../components/common/snackbar/DefaultSnackbar';


const Router = () => (
    <Fragment>
        <Switch>
            <RestrictRoute exact path="/" component={LoginForm}/>
            <RestrictRoute path="/signup" component={SignUpForm}/>

            <MainLayout>
                <Switch>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/people" component={PeopleContainer}/>
                    <PrivateRoute path="/teams" component={TeamsContainer}/>
                    <PrivateRoute path="/chat" component={ChatContainer}/>
                    <PrivateRoute path="/settings" component={SettingsContainer}/>
                </Switch>
            </MainLayout>

            <Route component={NotFound}/>
        </Switch>
    </Fragment>
);

export default Router;
