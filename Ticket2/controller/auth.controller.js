const jwt = require('jsonwebtoken');
const empty  = require('is-empty');
const PersianDate = require("../tools/jalaliTime");
const User = require('../models/user');



// register
exports.register = (req, res) => {
	console.log(req.body)
	console.log("adell")
	const user = new User({});
	User.findOne({"email": req.body.email}, function(err, user_data){
		if(err){
			console.log(err)
		}
		if(user_data){
			return res.json({
				status : 409,
				message : "User already exist"
			});
		}
		console.log(req.body, 44)
		user.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;
		user.mobile = req.body.mobile;
		user.fulltime = [
			{
			  date: PersianDate.fullDate(),
			  time: PersianDate.fullTime(),
			},
		  ],
		console.log(user ,49)
		user.save(function(err, user_data){
			if(err)
			return res.status(400).send(err);
			console.log(err);
			res.json({
				status: 200,
				message : 'You have succesfully registered.',
				user_data
			});
			console.log(user_data)
		});
	})
}


// result
exports.result = (req, res) => {
	User.find(function(err, users) {
		console.log(users)
		if (err)
			res.send(err);

		res.json(users);
	});
}
