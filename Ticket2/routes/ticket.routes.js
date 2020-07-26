const express = require('express');
const app = express.Router();
var cors = require('cors')


const ticket = require('../controller/ticket.controller');

// module.exports = async(req,res)=>{
    // Create a new Ticket
	 app.post('/create_ticket', ticket.create);
	
	// my tickets
	app.post('/my_tickets/', ticket.findUserTicket);

	// Answer Ticket
	app.post('/answer_ticket', ticket.answerTicket);

	// get chats
	app.get('/ticket', ticket.getTicket);

	// read ticket message 
	app.post('/read_ticket_message',ticket.readMessage);

	// get all tickets 
	app.get('/get_all_tickets',ticket.getAllTickets);

	// create Department
	app.post('/create_department', ticket.create_department);

	// get all department
	app.get('/get_all_department',ticket.getAllDepartment)

	// edit departement
	app.get('/edit_department/:id',ticket.getEditDepartment);

	// delete department
	app.get('/delete_department/:id',ticket.deleteDepartment);
	// }


module.exports = app;