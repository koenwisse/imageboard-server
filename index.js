const express = require("express");

const PORT = process.env.PORT || 4000;

// create the app (server)
const app = express();

// start the server
app.listen(PORT, () => console.log(`I am listening on port, ${PORT}`));
