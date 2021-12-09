// import tools
const express = require("express");
const PORT = process.env.PORT || 4000;

// importing the routers
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

// create the app (server)
const app = express();

//Middlewares

// Routers

// app.use("/lists", listRouter); // not defined
// app.use("/auth", authRouter); // login, signup, etc.

// start the server
app.listen(PORT, () => console.log(`I am listening on port, ${PORT}`));
