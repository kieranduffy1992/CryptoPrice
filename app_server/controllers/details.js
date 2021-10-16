/* GET details page */
const cryptopage = function(req, res){ 
res.render('crypto_data', { title: 'Crypto Details' }); 
};
module.exports = { 
cryptopage 
};
