
const { Router } = require('express');

const formRouter = Router();



const { getForm, postMessagefromForm} = require("../controller/newmsgController");


//get form
formRouter.get("/", getForm);



//adding new data
formRouter.post("/", postMessagefromForm);



module.exports = formRouter;