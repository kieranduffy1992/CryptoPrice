const mongoose = require('mongoose');
const dbURI = "mongodb+srv://kieran1:Kieran123@cluster0.hhhm6.mongodb.net/CryptoPrice?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./Cryptos');
require('./Users');