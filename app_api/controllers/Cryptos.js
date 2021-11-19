const mongoose = require('mongoose');
const Crypto = mongoose.model('Cryptos');

const _buildCryptoList = function(req, res, results) {
  let cryptos = [];
  results.forEach((doc) => {
    cryptos.push({
      name: doc.name,
      price: doc.price,
      volume: doc.volume,
      marketcap: doc.marketcap
    });
  });
  return cryptos;
};


const cryptoList = function (req, res) {
	Crypto.find(function (err, results) {
    cryptos = _buildCryptoList(req, res, results);
    res.status(200).json(cryptos);
  });
	
};


const cryptosReadOne = function (req, res) {
  if (req.params && req.params.cryptoid) {
    Crypto
      .findById(req.params.cryptoid)
      .exec((err, user) => {
        if (!user) {
          res	
            .status(404) 
            .json({	
              "message": "cryptoid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(user);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No cryptoid in request"
      });		
  }
};




module.exports = {
  cryptoList,
  cryptosReadOne
};
