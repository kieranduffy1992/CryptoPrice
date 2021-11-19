const mongoose = require('mongoose');
const User = mongoose.model('Users');

const getUserData = function (req, res) { 
res
.status(200)
.json({"status" : "success"});

};

const createUser = function (req, res) { 
User.create({ 
email: req.body.email,
firstname: req.body.firstname,
surname: req.body.surname,
password: req.body.password 

}, (err, location) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(location);
}
});


};

const usersReadOne = function (req, res) {
  if (req.params && req.params.userid) {
    User
      .findById(req.params.userid)
      .exec((err, user) => {
        if (!user) {
          res	
            .status(404) 
            .json({	
              "message": "userid not found"
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
        "message": "No userid in request"
      });		
  }
};


module.exports = {
  getUserData,
  createUser,
  usersReadOne
};