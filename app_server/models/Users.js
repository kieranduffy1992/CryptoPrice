const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
	email: String,
	firstname: String,
	surname: String,
	password: String
});

mongoose.model('Users', usersSchema);