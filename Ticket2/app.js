const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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



app.use("/bibtel/bibtel-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));



const ticketRoute = require('./routes/ticket.routes');
app.use('/bibtel/api',ticketRoute);

// Require Ticket routes
// require('./routes/ticket.routes')(app);



// listen for requests
app.listen(port = 5000, () => {
    console.log(`Server is listening on port ${port}`);
});









