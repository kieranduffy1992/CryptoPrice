const express = require('express');
const router = express.Router();

const ctrlSignin = require('../controllers/sign_in'); 
const ctrlDetails = require('../controllers/details');
 
/* signin pages */
router.get('/', ctrlSignin.signinpage);
router.get('/register', ctrlSignin.registrationpage);

/* details page */
router.get('/cryptopage', ctrlDetails.cryptolist);
module.exports = router;



