import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from '../drawer/Sidebar';
// Import custom components
import Header2 from '../header/Header2';


const useStyles = makeStyles(theme => ({
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
}));

function MainLayout(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: true
  });

  // React.useEffect(() => {
  //   const windowWidth = window.innerWidth;
  //   const breakpointWidth = theme.breakpoints.values.md;
  //   const isSmallScreen = windowWidth < breakpointWidth;

  //   if (isSmallScreen) {
  //     setState({ open: false });
  //   } else if (!isSmallScreen) {
  //     setState({ open: true });
  //   }
  // });

  const handleToggle = () => setState({ open: !state.open });

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header2 navDrawerOpen={state.open} handleToggleDrawer={handleToggle} />
        <Sidebar
          navDrawerOpen={state.open}
        />
        <main className={classes.content}>
          {props.children}
        </main>
      </div>
    </div>
  );
}

// class MainLayout extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       open: true,
//     };
//   }

//   componentDidMount() {
//     const windowWidth = window.innerWidth;
//     const breakpointWidth = theme.breakpoints.values.md;
//     const isSmallScreen = windowWidth < breakpointWidth;

//     if (isSmallScreen) {
//       this.setState({ open: false });
//     }
//   }

//   handleToggle = () => this.setState({ open: !this.state.open });

//   render() {
//     let { open } = this.state;
//     const classes = this.props.classes;
//     const { snackbarOpen, snackbarMessage, snackbarVariant } = this.state;

//     return (
//       <div className={classes.root}>
//         <div className={classes.appFrame}>
//           <Header2 navDrawerOpen={open} handleToggleDrawer={this.handleToggle} />
//           <Sidebar
//             navDrawerOpen={open}
//             handleToggleDrawer={this.handleToggle}
//             handleSnackbarToggle={this.handleSnackbarToggle}
//           />
//           <main className={classes.content}>
//             {this.props.children}
//           </main>
//         </div>
//       </div>
//     )
//   }
// }

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout