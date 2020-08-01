const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

// mongoose.connect(db)

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}); //calls server.js

		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);

		process.exit(1); //To exit process with failure
	}
};

module.exports = connectDB;