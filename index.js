const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./db'); // Ensure this function is correctly connecting to your database
const signRouter = require("./routes/signin");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");
const updateRouter = require('./routes/update');
const resetRoutes= require('./routes/reset');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({ origin: "*" }));

connectDb(); // Make sure this function is correctly connecting to your MongoDB database

console.log("hello");

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

// Use the /signin prefix for all routes in the signRouter
app.use("/signin", signRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use('/update', updateRouter);
app.use('/reset', resetRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
