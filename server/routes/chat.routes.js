const express = require('express');
const chatController = require('../controllers/chat.controller');

const router = express.Router();

// Fetch all chats for user
router.route('/fetch').post((req, res) => {
    chatController.getChats(req, res)
});

// Checks for new messages, if there are new messages it loads the messages.
router.route('/fetchnew').post((req, res) => {
    chatController.fetchNew(req, res);
});

// Sends message to designated user
router.route('/sendmsg').post((req, res) => {
    chatController.sendChat(req, res);
});

// Marks all messages in the chat to be read
router.route('/markread').post((req, res) => {
    chatController.markAsRead(req, res);
});

module.exports = router;

/*
    POST /chat/fetch -- Fetches all chats for the user
        - You need to pass the userId for this method to work.
        - The method will return the following
            - A JSON object of each chat in chronological order and not sorted by conversation.
*/

router.route('/chat/fetch').post((userId) => {
	
	
	
});


/*						
    POST /chat/fetchnew -- Fetches all chats for the user if there are new messages
        - You need to pass the userId for this method to work
        - The method will return the following
            - A JSON object of each chat in chronological order and not sorted by conversation.
*/
router.route('/chat/fetchnew').post((userId) => {
	
	
	
	
});


/*			
    POST /chat/sendmsg -- Adds a new message to the database
        - You need to pass the following:
            - conversation - the conversation id 
        - The method will return the following:
            - A JSON object of each chat in chronological order and not sorted by conversation.
*/
router.route('/chat/sendmsg').post((conversation) => {
	
	
	
	
});

			
/*			
    POST /chat/markread -- Marks the conversation/messages as read
        - You need to pass the following
            - conversation - the conversation id
*/
router.route('/chat/markread').post((conversation) => {
	
	
	
});





