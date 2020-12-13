const config = require("../config.json");
const db = require("../helpers/db");
const Chat = db.Chat;
const User = db.User;

// Returns each document that the person is in.
async function getChats(req, res) {
  var sender = req.body.sender;
  await Chat.find({'participants': sender}).then((result) => {
      return res.status(200).json({result});
  });
}

// Adds the chat to the database
async function sendChat(req, res) {
  var sender = req.body.sender;
  var receiver = req.body.receiver;
  var msg = req.body.message;

  var chat = await getChatHelper(sender, receiver);
  var chatArray = [];
  if (chat.length > 0) {
    chatArray = chat[0].chats;
  }
  var timeNow = new Date().getTime();
  chatArray.push({ message: msg, sender: sender, time: timeNow };

  var order = await getOrder(sender, receiver);
  if (order != null) {
    await Chat.findOneAndUpdate({'participants': order}, {chats: chatArray})
  }
  return res.status(200);
}

async function getChat(req, res) {
    var chat = await getChatHelper(req.body.sender, req.body.receiver);
    res.status(200).json({result: chat});
}

// Returns the object that holds convo between these two.
function getChatHelper(sender, receiver) {
  return new Promise((resolve, reject) => {
    Chat.find({ participants: [sender, receiver]}).then((chat) => {
      if (chat == null || chat == undefined || chat.length == 0) {
        Chat.find({participants: [receiver, sender]}).then((chat) => {
          if (chat == null || chat == undefined || chat.length == 0) {
            const newChat = new Chat({
              participants: [sender, receiver],
              chats: []
            });
            newChat.save();
            resolve(newChat.toJSON());
          } else {
            resolve(chat);
          }
        })
      } else {
        resolve(chat);
      }
    });
  });
}

function getOrder(sender, receiver) {
  return new Promise((resolve, reject) => {
    Chat.find({ participants: [sender, receiver]}).then((chat) => {
      if (chat == null || chat == undefined || chat.length == 0) {
        Chat.find({participants: [receiver, sender]}).then((chat) => {
          if (chat == null || chat == undefined || chat.length == 0) {
            resolve(null);
          } else {
            resolve([receiver, sender]);
          }
        });
      } else {
        resolve([sender, receiver]);
      }
    });
  });

}

module.exports = {
  getChat,
  getChats,
  sendChat,
  getChatHelper
};
