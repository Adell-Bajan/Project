const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const empty  = require('is-empty');
const JalaliDate = require('jalali-date');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger.json');
var cors = require('cors');

// create express app
const app = express();

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config/config');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
	useUnifiedTopology: true, 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useFindAndModify: false 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.use(express.static(path.join(__dirname, 'dist')))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// token middlewares
const token = require('./config/token');
app.set('superSecret',token.secret);
const User = require('./models/user');

app.use("/bibtel/bibtel-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));



const ticketRoute = require('./routes/ticket.routes');
app.use('/bibtel/api',ticketRoute);

// auth routes
const authRoute = require('./routes/auth.routes');
app.use('/bibtel/api',authRoute);





//  *******  route login  ******* //
app.post('/bibtel/api/login',(req,res)=>{
		User.findOne({"password": req.body.password, "mobile": req.body.mobile}, function(err, user_data){
			if(err || !user_data){
				return res.status(401).json({
					status : 401,
					message : "Invalid mobile and password.",
				});
			} else {
				const payload = {
					mobile: user_data.mobile
    			};
    			var token = jwt.sign(payload, app.get('superSecret'), {
          			expiresIn : 60*60*24 // expires in 24 hours
    			});
				res.status(200).json({
					message : "You have succesfully loggedin.",
					user_data,
					token	: token
				});
			}
		});
	});

// ********    ent route login    ********* //


//  *******     verify token              ******** //

app.use(function(req,res,next){
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(token){
	  jwt.verify(token, app.get('superSecret'), function(err,decoded){
		if(err){
		  return res.json({status : 403,success:false, message:'Failed to authenticate token.'});
		} else {
		  req.decoded = decoded;
		  next();
		}
	  });
	} else {
	  return res.json({
		status : 403,	
		success: false,
		message: 'No token provided.'
	  });
	}
  });

// ***********        End verify token          *********** //
  


// listen for requests
app.listen(port = 5000, () => {
    console.log(`Server is listening on port ${port}`);
});









