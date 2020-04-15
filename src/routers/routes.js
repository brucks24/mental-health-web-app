import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';

// Import custom components
import MainLayout from '../components/common/layout/MainLayout';
import Login from '../containers/auth/LoginContainer';
import RegisterContainer from '../containers/auth/RegisterContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import ProfileContainer from '../containers/profile/ProfileContainer';
import SupportTeamContainer from '../containers/supportTeam/SupportTeamContainer';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const MainRouter = () => {
    return (
        <Fragment>
            <Switch>
                <RestrictedRoute exact path="/" component={Login} />
                <RestrictedRoute path="/register" component={RegisterContainer} />

                <MainLayout>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/support-team" component={SupportTeamContainer} />
                        <PrivateRoute exact path="/user/:id" component={ProfileContainer} />
                    </Switch>
                </MainLayout>
            </Switch>
        </Fragment>
    )
}

export default MainRouter;