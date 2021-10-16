/* GET 'home' page */
const signinpage = function(req, res){
res.render('index', { title: 'Sign In' });
};

/* GET 'registration page' page */
const registrationpage = function(req, res){
res.render('register', { title: 'Register' });
};

module.exports = {
registrationpage,
signinpage
};
