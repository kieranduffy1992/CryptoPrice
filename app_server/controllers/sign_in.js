/* GET 'home' page */
const signinpage = function(req, res){
	res.render('index', { 
		title: 'Sign In', 
		header: { 
			title: 'Welcome to Crypto Price', 
			tagLine: 'Login to your account below' 
				},
		loginForm: {
			email: 'Email address:',
			password: 'Password:',
			button: 'Login',
			link: 'Register Here'
		}		
	});
};

/* GET 'registration page' page */
const registrationpage = function(req, res){
	res.render('register', { 
		title: 'Register',
		header: { 
			title: 'Welcome to Crypto Price', 
			tagLine: 'Register account below' 
				},
		registerForm: {
			email: 'Email address:',
			firstname: 'First Name:',
			surname: 'Surname:',
			password: 'Password:',
			button: 'Register'
		}
	});
};

module.exports = {
registrationpage,
signinpage
};
