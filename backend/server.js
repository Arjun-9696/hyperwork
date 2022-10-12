const express = require('express');
const connect = require('./config/db');
const profileController = require('./controllers/profileController');
const bidController = require('./controllers/bidController');
const itemController = require('./controllers/itemController');
const auctionController = require('./controllers/auctionController');


const app = express();
app.use(express.json());

app.use('/profile', profileController);
app.use('/bid', bidController);
app.use('/item', itemController);
app.use('/auction', auctionController);


app.listen(process.env.PORT || 5000
    , () => {
        connect();
        console.log('listening on port 5000');
    });
