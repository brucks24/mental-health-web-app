import React from 'react'
import {Dialog, DialogContent, DialogTitle, TextField, Button, makeStyles, Grid, Typography} from '@material-ui/core'


export default function Popup(props){
    
    const{title, children, openPopup, setOpenPopup} = props;
    const handleClose = () => {
        setOpenPopup(false);
      };

    

    return(
        <Dialog open = {openPopup}>
            
                 
                
      
    
            <DialogTitle>
                 Create Message                
            </DialogTitle>
            <DialogContent>
                
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="userName"
                    fullWidth
                />
                
                <TextField
                    autoFocus
                    margin="dense"
                    id="message"
                    label="Message"
                    type="typedMessage"
                    fullWidth
                />
                
                
                <Button 
                    
                    variant="contained" 
                    color="primary"
                    onClick={handleClose}
                    
                    >
                        Send
                </Button>
                
                
                
            </DialogContent>
           

        </Dialog>
        
    )
}

