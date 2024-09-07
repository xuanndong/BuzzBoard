const express = require("express");
const app = express();
require("dotenv").config();

let PORT = process.env.PORT || 3000;
const path = require("node:path");
const indexRouter = require("./router/indexRouter");
const formRouter = require("./router/formRouter");
const msgDetailRouter = require("./router/msgDetailRouter");
const errorHandler = require("./controller/errorHandler");


// express middleware to pass form data to req.body
app.use(express.urlencoded({ extended: true }));



// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


//setting ejs views

//indexpage
app.use("/", indexRouter);


//form
app.use("/new", formRouter);



//message details
app.use("/msgDetails", msgDetailRouter);


//error handler
app.use(errorHandler);


//listener
app.listen(PORT, () => {
    console.log(`messaging app - listening on port http://localhost:${PORT}`);
});








//TODO:
//TODO 1. reusable templates
//TODO 2. controllers
//TODO 3. static assets
//TODO 4. error handlers
