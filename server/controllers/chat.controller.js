const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const ChatIds = db.ChatIds;
const User = db.User;

// Returns all the of the chats for the userId.
async function getChats(req, res) {
    var id = await getConversationId(req.body.sender, req.body.receiver);
    Chat.findOne({ conversationId: id }).then(chats => {

        // let's format the chats...
        var newChats = [];
        chats.array.forEach(element => {

            var sideBool = await didUserOneSend(req.body.sender, req.body.receiver);
            var side = 'right';
            if (sideBool) {
                side = 'left';
            }
            
            var tmp = {
                message: element.message,
                side: side,
                time: element.createdAt
            };
            newChats.push(tmp);
        });
        return res.status(200).json({ newChats })
    });
    return null;
}

function getConvos(req, res) {
    var convos = [];
    const user = req.body.user;

    if (user == undefined) {
        return convos;
    }

    ChatIds.find({ user_one: `${user}` }).then(convo => {
        if (convo.length > 0) { convos.push(convo); }
        ChatIds.find({ user_two: `${user}` }).then(convo => {
            if (convo.length > 0) { convos.push(convo); }
            return res.status(200).json(convos);
        });
    });
}

// Returns boolean value wheter or not user has new unread chats
async function hasUnreadChats(req, res) {
    var id = await getConversationId("test1", "test2");
    Chat.find({ conversationId: id, isRead: false }).then(chats => {
        var hasUnread = chats.length > 0 ? true : false;
        return res.status(200).json({ hasUnread: hasUnread });
    });
    return null;
}

async function getConvoId(req, res) {
    var id = await getConversationId(req.body.sender, req.body.receiver);
    return res.status(200).json({ id: id });
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
                    resolve(false)
                });
            } else {
                resolve(true)
            }
        });
        resolve(null)
    });
}

// Adds the chat to the database
async function sendChat(req, res) {
    var id = await getConversationId(req.body.sender, req.body.receiver);
    var userOneSent = await didUserOneSend(req.body.sender, req.body.receiver);
    var message = req.body.msg;
    console.log(message);
    const chat = new Chat({
        message: message,
        conversationId: id,
        userOneSent: userOneSent,
        isRead: false
    })
    chat.save();
    getConvos(req, res);
}

// Marks the conversation as read
function markAsRead(req, res) {
    var conversation = req.body.conversation;
    Chat.updateMany({ conversationId: conversation }, { $set: { isRead: true } }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    getChats(req, res);
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
    markAsRead,
    getConvos,
    getConvoId
};