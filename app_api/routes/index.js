const express = require('express');
const router = express.Router();
const ctrlCryptos = require('../controllers/Cryptos'); 
const ctrlUsers = require('../controllers/Users');


// get crypto data
router
  .route('/Cryptos')
  .get(ctrlCryptos.cryptoList);
  
router
  .route('/Cryptos/:cryptoid')
  .get(ctrlCryptos.cryptosReadOne);
  
  
// get sign in
router
  .route('/Users')
  .get(ctrlUsers.getUserData)
  .post(ctrlUsers.createUser);
  
router
  .route('/Users/:userid')
  .get(ctrlUsers.usersReadOne);
   
	 
module.exports = router;
