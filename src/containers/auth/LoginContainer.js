import React, {Component} from 'react';

//import * as authService from '../../services/authService';

// Import custom components
import LoginForm from '../../components/auth/LoginForm';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        //nothing
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.submitForm}
                errorMessage={this.props.errorMessage}
            />
        )
    }

}

export default (LoginContainer)