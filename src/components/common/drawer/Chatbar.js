import React, {
    useState,
    useEffect
} from 'react';
import classNames from 'classnames';
import {
    Drawer,
    IconButton,
    List,
    Avatar,
    InputBase,
    Divider,
    Fab,
    Button
} from "@material-ui/core";
import {
    useTheme
} from '@material-ui/styles';
import chatbarStyles from './chatbarStyles';
import {
    useSelector
} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ChatCard from './components/ChatCard'
import Chat from './Chat';
import AddIcon from '@material-ui/icons/Add';
import {
    getUserChats,
    sendUserMessage,
    markMessageRead,
    getUserConvos
} from '../../../redux/actions/chatActions';
import {
    createTeam
} from '../../../redux/actions/coachActions';
import {
    useDispatch
} from 'react-redux';
import Popup from './components/Popup';



var openChats = [];

/*
const openChats = [{
    id: 0,
    name: 'Remy Sharp',
    image: '/static/images/avatar/1.jpg',
    previewMessage: 'Hey just wanted to check in with you about',
}]
*/

export function setChat(data, name) {
    const convos = data.data[0];
    openChats = [];

    if (convos != undefined) {
        convos.forEach(e => {
            console.log(name + "  " + e.user_one);
            var user = e.user_one;
            if (user == name) {
                user = e.user_two;
            }

            openChats.push({
                id: e._id,
                name: user,
                previewMessage: 'Clck to view conversation'
            });
        });
    }
}

function Chatbar(props) {
    let {
        ChatOpen
    } = props
    const theme = useTheme();
    const classes = chatbarStyles();
    const dispatch = useDispatch();
    const [userData, setUserData] = React.useState({});
    const [openPopup, setOpenPopup] = useState(false);
    const { name, user } = useSelector(state => ({
        name: `${state.user.firstName} ${state.user.lastName}`,
        user: state.user,
    }));

    // Load the chats on initilize
    dispatch(getUserConvos(name));

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getUserConvos(name))
    }


    return ( <
        Drawer variant = "persistent"
        className = {
            classNames(classes.drawer, {
                [classes.drawerOpen]: ChatOpen,
                [classes.drawerClose]: !ChatOpen,
            })
        }

        anchor = "right"
        open = {
            ChatOpen
        }
        classes = {
            {
                paper: classNames({
                    [classes.drawerOpen]: ChatOpen,
                    [classes.drawerClose]: !ChatOpen,
                }),
            }
        } >

        <
        div className = {
            classes.toolbar
        }
        />  <
        div className = {
            classes.search
        } >

        <
        div className = {
            classes.searchIcon
        } >
        <
        SearchIcon / >
        <
        /div>  <
        InputBase placeholder = "Search for person"
        classes = {
            {
                root: classes.inputRoot,
                input: classes.inputInput,
            }
        }
        inputProps = {
            {
                'aria-label': 'search'
            }
        }
        />  < /
        div > <
        Divider / >

        <
        div className = {
            classes.chatList
        } >
        <
        List className = {
            classes.root
        } > {
            openChats.map(item => ( <
                ChatCard name = {
                    item.name
                }
                image = {
                    item.image
                }
                previewMessage = {
                    item.previewMessage
                }

                />
            ))
        } <
        /List>  < /
        div >

        <
        div className = {
            classes.newChat
        } >

        <
        Fab variant = "extended"
        color = "primary"

        onClick = {
            () => setOpenPopup(true)
        }


        >
        <
        AddIcon className = {
            classes.extendedIcon
        }
        />
        Create <
        /Fab> 

        <
        /div > <
        newMessageForm / >
        <
        Popup openPopup = {
            openPopup
        }
        setOpenPopup = {
            setOpenPopup
        } >
        <
        /Popup>

        <
        /Drawer>

    )
}

export default Chatbar;