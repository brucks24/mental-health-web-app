import React from 'react';
import Profile from '../../components/profile/Profile';

export default function ProfileContainer(props) {
    const id = props.match.params.id;

    return ( <
        Profile id = { id }
        />
    );
}