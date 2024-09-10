const asyncHandler = require('express-async-handler');
//const messages = require("../data/messages");
const { getAllMessages } = require("../db/queries");

const getMessages = asyncHandler(async (req, res) => {
    const messages = await getAllMessages();
    console.log("Messages: ", messages);

    if (messages.length === 0) {
        const error = new Error("Messages not found");
        error.status = 404;
        error.name = "NotFoundError";
        throw error;
    }
    res.render("index", { messages: messages, title: 'BUZZBOARD' });
});



module.exports = getMessages;
