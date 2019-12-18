import React, { Component } from 'react';
import People from '../../components/people/People';

class PeopleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <People />
        );
    }
}

export default PeopleContainer;