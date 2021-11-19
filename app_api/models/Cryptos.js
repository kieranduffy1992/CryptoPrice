const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
	name: {type: String, required: true},
	price: {type: Number, required: true},
	volume: {type: String, required: true},
	marketcap: {type: Number, required: true}
}, {
    versionKey: false 
});

mongoose.model('Cryptos', cryptoSchema);
