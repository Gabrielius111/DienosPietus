const mongoose = require('mongoose');

const connectingDB = async () => {
    try {
        const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
            console.log(`connected. ${connecting.connection.host}`);
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectingDB;