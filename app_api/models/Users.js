const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: {type: String, required: true},
	firstname: {type: String, required: true},
	surname: {type: String, required: true},
	password: {type: String, required: true}
}, {
    versionKey: false 
});

mongoose.model('Users', usersSchema);