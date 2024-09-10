const { Router } = require("express");
const msgDetailRouter = Router();
const getmsgDetails = require("../controller/msgDetailController");


// message details
msgDetailRouter.get("/:name", getmsgDetails);

module.exports = msgDetailRouter;
