/* GET details page */
const cryptopage = function(req, res){ 
	res.render('crypto_data', { 
		title: 'Crypto Details',
		card: { 
			price: 'Price: ', 
			volume: 'Volume: ',
			volMarket: 'Vol/Marketcap: '
				},
		Cryptos: [{
			name: 'Bitcoin',
			price: '60,586',
			volume: '43,241,820',
			marketcap: '0.037'},
		    
			{name: 'Ethereum',
			price: '3,586',
			volume: '22,671,110',
			marketcap: '0.011'},
			
			{name: 'Cardano',
			price: '3.41',
			volume: '3,211,413',
			marketcap: '0.008'},
			
			{name: 'XRP',
			price: '1.96',
			volume: '1,241,820',
			marketcap: '0.001'}]	
	}); 
};
module.exports = { 
cryptopage 
};


