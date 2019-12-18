import React, { Component } from 'react'

import {USERS} from '../../constants/entity'
import * as crudAction from '../../actions/crudAction'

class UserName extends Component {
    constructor(props) {
        super(props)
        this.getFullName = this.getFullName.bind(this)
    }

    getUser(id) {
        this.props.actions.fetchById(USERS, id)
    }

    render() {
        return (
            {this.getUser}
        )
    }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(SignUpContainer)