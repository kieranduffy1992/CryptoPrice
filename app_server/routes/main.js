/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'CryptoPrice' }); 
};
module.exports = { 
index 
};
