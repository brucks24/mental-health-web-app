import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as crudAction from '../../../actions/crudAction';
import * as uiService from '../../../services/uiService';
import store from '../../../store/configureStore';
import axios from 'axios';

import {API_URL} from '../../../config/config';

// Import custom components
import Header from '../header/Header';
import Sidebar from '../drawer/Sidebar';
import CustomizedSnackbar from '../snackbar/CustomizedSnackbar';
import { showInfoSnackbar } from '../../../services/uiService';

const styles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        flexGrow: 1,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    }
});

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            name: null,
            email: null,
            user: null,
            snackbarOpen: false,
            snackbarMessage: "This is from Mainlayout",
            snackbarVariant: 'success',
        };
    }

    componentDidMount() {
        this.fetchUser()
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleSnackbarToggle = () => this.setState({snackbarOpen: !this.state.snackbarOpen})

    fetchUser() {
        // TODO: eventually change this to get the curent user
        axios.get(API_URL + 'users/' + 3).then((res) => {
            this.setState({
                name: res.data.data.firstName + ' ' + res.data.data.lastName,
                email: res.data.data.email
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        let { open } = this.state;
        const classes = this.props.classes;
        const { name, email, snackbarOpen, snackbarMessage, snackbarVariant } = this.state;

        //console.log(this.props)

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <Header navDrawerOpen={open} handleToggleDrawer={this.handleToggle} />
                    <Sidebar 
                        navDrawerOpen={open} 
                        handleToggleDrawer={this.handleToggle}
                        handleSnackbarToggle={this.handleSnackbarToggle} 
                        name={name}
                        email={email}/>
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
                    <CustomizedSnackbar
                        snackbarOpen={snackbarOpen}
                        variant={snackbarVariant}
                        className={classes.snackbar}
                        message={snackbarMessage}
                    />}
                </div>
            </div>
        )
    }

}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element,
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
        ui: bindActionCreators(Object.assign({}, uiService), dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(MainLayout))