const asyncHandler = require('express-async-handler');
const { getDetailMessage } = require('../db/queries');

const getmsgDetails = asyncHandler(async (req, res) => {
    console.log('hello');
    console.log(req.params);
    const messages = await getDetailMessage(req.params.name);
    if (messages.length === 0) {
        res.send('No');
    } else {
        let result = '';
        messages.forEach(msg => {
            result = `User Name: ${msg.name}<br>Content: ${msg.text}<br>Date: ${msg.added}`;
            result += '<br>----------------------<br>';
        });
        res.send(result);
    }
});

module.exports = getmsgDetails; 
