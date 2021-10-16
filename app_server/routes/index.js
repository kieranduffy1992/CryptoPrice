const express = require('express');
const router = express.Router();

const ctrlSignin = require('../controllers/sign_in'); 
const ctrlDetails = require('../controllers/details');
 
/* Locations pages */
router.get('/', ctrlSignin.signinpage);
router.get('/register', ctrlSignin.registrationpage);

/* details pages */
router.get('/cryptopage', ctrlDetails.cryptopage);
module.exports = router;



