const asyncHandler = require('express-async-handler');

const getmsgDetails = asyncHandler(async(req, res)=>{
        res.render("msgDetails", { user: req.params.user, text: req.query.text, added: req.query.added});
});

module.exports = getmsgDetails;