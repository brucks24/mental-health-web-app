import React from 'react';
import { Grid, Fade } from '@material-ui/core';
import { red, purple, pink, blue, lightBlue, teal, green, lightGreen } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import SupportServiceCard from './SupportServiceCard';

const supportServices = [
  {
    id: 0,
    image: 'https://scx1.b-cdn.net/csz/news/800/2019/4-space.jpg',
    header: 'Athletics Department',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: red[500],
    notifications: 5
  },
  {
    id: 1,
    image: 'https://assets3.thrillist.com/v1/image/2794471/size/sk-2017_04_standard_listing_desktop.jpg',
    header: 'Sports Medicine',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: purple[500],
    notifications: 4
  },
  {
    id: 2,
    image: 'https://specials-images.forbesimg.com/imageserve/1035676256/960x0.jpg',
    header: 'Sports Nutrition',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: pink[500],
    notifications: 1
  },
  {
    id: 3,
    image: 'https://www.themandarin.com.au/content/uploads/2019/10/space-nebula.jpg',
    header: 'Sports Psychology',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: blue[500]
  },
  {
    id: 4,
    image: 'https://images.squarespace-cdn.com/content/v1/58817d60d2b85782338743f1/1504491920042-Q4MH1BFC4Y1Z6HKWFO0J/ke17ZwdGBToddI8pDm48kMuNI7TYmAmcFvkbSOsmSFp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdPQYSMOX3GTOJPeWjROptyJBbowpFVI2soJVioWMj-1lPRhrjbf-ufqwsSWgrw9rg/gis+header+1.jpg',
    header: 'Health and Well-being',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: lightBlue[500],
    notifications: 3
  },
  {
    id: 5,
    image: 'https://www-tc.pbs.org/wgbh/nova/media/original_images/topic-space-flight.jpg',
    header: 'Academic Excellence',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: teal[500]
  },
  {
    id: 6,
    image: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1035676256%2F0x0.jpg',
    header: 'Leadership Development',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: green[500]
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&q=80&fm=jpg',
    header: 'Conduct and Compliance',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    expandedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: lightGreen[500],
    notifications: 1
  },
]

function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.titleText}>Support Services</Typography>

      <Grid container spacing={4} style={{ marginBottom: '15px' }}>
        {supportServices.map(item => (
          <Fade in={true}>
            <SupportServiceCard
              image={item.image}
              header={item.header}
              link={item.link}
              description={item.description}
              expandedText={item.expandedText}
              color={item.color}
              notifications={item.notifications}
            />
          </Fade>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;