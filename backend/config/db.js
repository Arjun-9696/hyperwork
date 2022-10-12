const mongoose = require('mongoose');
const connect = async () => {
    try {
        return mongoose.connect(
            'mongodb+srv://Arjun:Arjun009@cluster0.gqpkhpa.mongodb.net/hyperwork?retryWrites=true&w=majority'
        );
    } catch (err) {
        console.error(err.message);
    }
};
module.exports = connect;
