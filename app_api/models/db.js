const mongoose = require('mongoose');
//const dbURI = "mongodb+srv://kieran1:123@cluster0.hhhm6.mongodb.net/CryptoPrice?retryWrites=true&w=majority";
const dbURI = "mongodb+srv://duffy1:hello1@cluster0.qdiag.mongodb.net/CryptoPrice?retryWrites=true&w=majority";

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

const dbConnection = mongoose.connection;


dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
//mongoose.connect(dbURI);

require('./Cryptos');
require('./Users');