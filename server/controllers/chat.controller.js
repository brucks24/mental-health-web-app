const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const ChatIds = db.ChatIds;
const User = db.User;

// Returns all the of the chats for the userId.
async function getChats(req, res) {
    var id = await getConversationId("test1", "test2");

    Chat.find({conversationId: id}).then(chats => {
        console.log(chats);
    });

    return res.status(200);
}

// Returns boolean value wheter or not user has new unread chats
async function hasUnreadChats(req, res) {
    var id = await getConversationId("test1", "test2");
    Chat.find({conversationId: id, isRead: false}).then(chats => {
        return chats.length > 0 ? true : false;
    });
}

// Returns the conversation id that is between the two users.
function getConversationId(sender, receiver) {
    return new Promise(function(resolve, reject) {
        ChatIds.findOne({ user_one: sender, user_two: receiver }).then(convo => {
            if (convo == null) {
                ChatIds.findOne({ user_one: receiver, user_two: sender }).then(convo => {
                    if (convo == null) {
                        const id = new ChatIds({
                            user_one: sender,
                            user_two: receiver,
                            conversationId: `${makeid(10)}`
                        });
                        id.save();
                        resolve(id.conversationId);
                    } else {
                        resolve(convo2.conversationId);
                    }
                });
            } else {
                resolve(convo.conversationId);
            }

        });
    })
}

function didUserOneSend(sender, receiver) {
    return new Promise((resolve, reject) => {
        ChatIds.findOne({ user_one: sender, user_two: receiver }).then(convo => {
            if (convo == null) {
                ChatIds.findOne({ user_one: receiver, user_two: sender }).then(convo => {
                    return false;
                });
            } else {
                return true;
            }
        });
        return null;
    });
}

// Adds the chat to the database
async function sendChat(req, res) {
    var id = await getConversationId("test1", "test2");
    var userOneSent = await didUserOneSend("test1", "test2");
    var message = "This is a test message.";
    const chat = new Chat({
        message: message,
        conversationId: id,
        user_one_sent: userOneSent,
        isRead: false
    })
    chat.save();


    // TODO: Reload the data and reload the chatbox with the updated chats.
}

// Marks the conversation as read
function markAsRead(req, res) {
    var conversation = req.body.conversation;
    Chat.updateMany({ conversationId: conversation }, { $set: { isRead: true } }, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function makeid(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {
    getChats,
    hasUnreadChats,
    sendChat,
    markAsRead
};