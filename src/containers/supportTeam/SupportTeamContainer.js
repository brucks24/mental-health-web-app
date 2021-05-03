import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import { SupportTeamCard } from '../../components/supportTeam/SupportTeamCard';

const supportMembers = [
  {
    id: 0,
    photoUrl: 'https://sass-profile-photos.s3.us-east-2.amazonaws.com/photo.jpg',
    firstName: 'Kristina',
    lastName: 'Navarro, PhD',
    providerType: 'Athletics Department Support',
    phone: '608-628-9187',
    email: 'navarrok@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'offline'
  },
  {
    id: 1,
    photoUrl: 'https://sass-profile-photos.s3.us-east-2.amazonaws.com/2.jpg',
    firstName: 'Logan',
    lastName: 'Edwards, PhD',
    providerType: 'Team Mental Skills Coach',
    phone: '262-472-1374',
    email: 'edwardsl@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'online'
  },
  {
    id: 2,
    photoUrl: 'https://sass-profile-photos.s3.us-east-2.amazonaws.com/omdoll_150x200.png',
    firstName: 'Rachael',
    lastName: 'Omdoll, RD',
    providerType: 'Team Dietitian',
    phone: '262-472-1375',
    email: 'omdollr@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'online'
  },
  {
    id: 3,
    photoUrl: 'https://sass-profile-photos.s3.us-east-2.amazonaws.com/Steve-Hilmer.jpg',
    firstName: 'Steve',
    lastName: 'Hillmer, ATC',
    providerType: 'Head Athletic Trainer',
    phone: '262-472-5555',
    email: 'hillmers@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'away'
  },
  {
    id: 4,
    photoUrl: 'https://sass-profile-photos.s3.us-east-2.amazonaws.com/15219368_10103882127277919_8056818553640390465_n.jpg',
    firstName: 'Lindsey',
    lastName: 'Greviskes, PhD',
    providerType: 'Sport Psychologist',
    phone: '630-699-4119',
    email: 'greviskesl@uww.edu',
    officeHours: 'Mon - Fri 8AM-3:30PM',
    status: 'away'
  },
  {
    id: 5,
    photoUrl: ' ',
    firstName: 'Ryan',
    lastName: 'Callahan',
    providerType: 'Athletics Director',
    phone: '262-472-4661',
    email: 'callahanRM19@uww.edu',
    officeHours: 'Mon - Fri 9AM-5PM',
    status: 'online'
  },
  {
    id: 6,
    photoUrl: ' ',
    firstName: 'Steve',
    lastName: 'Hillmer',
    providerType: 'Head Athletic Trainer',
    phone: '262-472-3716',
    email: 'hillmers@uww.edu',
    officeHours: 'Mon - Fri 9AM-5PM',
    status: 'online'
  },
  {
    id: 7,
    photoUrl: ' ',
    firstName: 'Cameron',
    lastName: 'Clinton-Earl',
    providerType: 'Academic Advisor',
    phone: '262-472-7588',
    email: 'clintonc@uww.edu',
    officeHours: 'Mon - Fri 9AM-5PM',
    status: 'online'
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
