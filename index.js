const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./db'); // Ensure this function is correctly connecting to your database
const signRouter = require('./routes/signin');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');
const updateRouter = require('./routes/update');
const resetRoutes = require('./routes/reset');
const cors = require('cors');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({ origin: '*' }));

connectDb(); // Make sure this function is correctly connecting to your MongoDB database

console.log('hello');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.use('/signin', signRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/update', updateRouter);
app.use('/reset', resetRoutes);


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
