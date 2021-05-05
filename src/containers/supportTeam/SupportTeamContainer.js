import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import { SupportTeamCard } from '../../components/supportTeam/SupportTeamCard';

const supportMembers = [
  {
    id: 0,
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187405/staff-photos/Kristina_Navarro_mxvldn.jpg',
    firstName: 'Kristina',
    lastName: 'Navarro',
    title: 'PhD',
    providerType: 'Athletics Department Support',
    phone: '608-628-9187',
    email: 'navarrok@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'offline'
  },
  {
    id: 1,
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187405/staff-photos/Logan_Edwards_wnqwjf.jpg',
    firstName: 'Logan',
    lastName: 'Edwards',
    title: 'PhD',
    providerType: 'Team Mental Skills Coach',
    phone: '262-472-1374',
    email: 'edwardsl@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'online'
  },
  {
    id: 2,
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187405/staff-photos/Rachael_Omdoll_cycnlz.png',
    firstName: 'Rachael',
    lastName: 'Omdoll',
    title: 'RD',
    providerType: 'Team Dietitian',
    phone: '262-472-1375',
    email: 'omdollr@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'online'
  },
  {
    id: 3,
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187405/staff-photos/Steve_Hillmer_sku7i3.jpg',
    firstName: 'Steve',
    lastName: 'Hillmer',
    title: 'ATC',
    providerType: 'Head Athletic Trainer',
    phone: '262-472-5555',
    email: 'hillmers@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'away'
  },
  {
    id: 4,
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187405/staff-photos/Lindsey_Greviskes_nbaemu.jpg',
    firstName: 'Lindsey',
    lastName: 'Greviskes',
    title: 'PhD',
    providerType: 'Sport Psychologist',
    phone: '630-699-4119',
    email: 'greviskesl@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'away'
  },
];

export default function SupportTeamContainer(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.titleText}>Your Support Team</Typography>

      <Grid className={classes.container} container spacing={4}>
        {supportMembers.map(member => (
          <SupportTeamCard
            id={member.id}
            photoUrl={member.photoUrl} 
            firstName={member.firstName}
            lastName={member.lastName}
            title={member.title}
            providerType={member.providerType}
            phone={member.phone}
            email={member.email}
            officeHours={member.officeHours}
            status={member.status}
          />
        ))}
      </Grid>
    </div>
  )
}