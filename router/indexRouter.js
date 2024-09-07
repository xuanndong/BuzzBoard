const { Router } = require('express');

const indexRouter = Router();

const getMessages = require("../controller/homeController");




// initial page

indexRouter.get("/", getMessages);




module.exports = indexRouter;