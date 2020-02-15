const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// create express app
const app = express();

// bodyparser middleware
app.use(express.json());

// mongo connection
require('dotenv').config();
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB database connection established!");
})


// production path
if(process.env.NODE_ENV === "production"){
app.use(express.static(__dirname, 'client/build'));

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
}

const port = process.env.PORT || 4000
app.listen(port, () => {console.log(`server started on port ${4000}`);
})


