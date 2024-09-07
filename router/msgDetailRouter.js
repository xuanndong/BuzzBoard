const { Router } = require("express");
const msgDetailRouter = Router();
const getmsgDetails = require("../controller/msgDetailController");


// message details
msgDetailRouter.get("/:user", getmsgDetails);

module.exports = msgDetailRouter;