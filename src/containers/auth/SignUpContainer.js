import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {USERS} from '../../constants/entity'
//import * as crudAction from '../../actions/crudAction'

// Import custom components
import RegisterForm from '../../components/auth/RegisterForm'

class SignUpContainer extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * Submit the form.
     *
     * @param {object} formProps
     */
    submitForm(formProps) {
        console.log(formProps)
        this.props.actions.submitForm(USERS, formProps);
    }

    render() {

        return (
            <RegisterForm
                onSubmit={this.submitForm}
                errorMessages={this.props.errorMessages}
            />
        );
    }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    //actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
});

export default connect(null, mapDispatchToProps)(SignUpContainer);