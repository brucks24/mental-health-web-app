import React, { Fragment } from 'react';
import useStyles from './styles';
import Profile from '../../components/profile/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';

export default function ProfileContainer(props) {
  const id = props.match.params.id;

  function handleSave(userData) {
    //TODO
  }
  
  return (
    <Profile id={id} />
  );
}
