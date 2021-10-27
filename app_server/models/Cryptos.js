const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
	name: String,
	price: Number,
	volume: String,
	marketcap: Number
});

mongoose.model('Cryptos', cryptoSchema);
