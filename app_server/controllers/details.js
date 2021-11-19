const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000',
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://cryptoprice2021.herokuapp.com';
}

const cryptolist = function (req, res) {
  const path = '/api/Cryptos';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    cryptopage(req, res, body);
  });
};

const cryptopage = function(req, res, responseBody){ 
	res.render('crypto_data', { 
		title: 'Crypto Details',
		card: { 
			price: 'Price: ', 
			volume: 'Volume: ',
			volMarket: 'Vol/Marketcap: '
				},
		Cryptos: responseBody,	
	}); 
};
module.exports = { 
cryptolist
};


