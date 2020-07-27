const Ticket = require('../models/ticket');
const User = require('../models/user');
const AnswerTicket = require('../models/ticketmessage');
const ticket = require('../models/ticket');
const PersianDate = require("../tools/jalaliTime");
const Department = require('../models/department');


// Create and Save a new Ticket
exports.create = (req, res) => {
	console.log(req.body)
	// Validate request
	if (!req.body.question) {
		return res.status(400).send({
			success: false,
			message: "please enter question"
		});
	}
	if (!req.body.user) {
		return res.status(400).send({
			success: false,
			message: "user not found"
		});
	}

	const page = req.query.page || 1 ;
	Ticket.findOne().limit(1).sort({ $natural: -1 }).then(function (lastTicket, err) {
		// Create a Ticket
		const ticket = new Ticket({
			question: req.body.question,
			code: lastTicket.code + 1,
			user_id: req.body.user,
			op_unreads: 1,
			fulltime: [
				{
				  date: PersianDate.fullDate(),
				  time: PersianDate.fullTime(),
				},
			  ],
		});
		// Save Ticket in the database
		ticket.save()
			.then(data => {
				res.json({
					success: true,
					data
				})
			}).catch(err => {
				res.status(500).send({
					success: false,
					message: err.message || "Some error occurred while creating the ticket."
				});
			});
	});



};

// Find ticket one
exports.getTicket = async (req, res) => {
	const role = req.query.role === 'user' ? 'user_unreads' : 'op_unreads';
	await Ticket.findOne({ _id: req.query.ticket_id, }).then(ticket => {
		// role = req.query.role
		// var operator_unreads = ticket.op_unreads ;
		var user_unreads = ticket.user_unreads;

		if (req.query.role == 'user') {
			var user_unreads = ticket.user_unreads == 0;

			Ticket.updateOne({ _id: req.query.ticket_id }, { $set: { user_unreads: (user_unreads === 0) } }, function (err, db) {
			});

		} if (req.query.role == 'operator') {

			var operator_unreads = ticket.op_unreads == 0;

			Ticket.updateOne({ _id: req.query.ticket_id }, { $set: { op_unreads: (operator_unreads === 0) } }, function (err, db) {

			});
		}
	})
	const ITEMS = 10;
	const PAGE = req.query.page  || 1 ;
	Ticket.findById(req.query.ticket_id,)
	.select(`${role} question fulltime`)

	.then(firstTicket => {
		if (!firstTicket) { console.log("question not found") }
		else {
			var question = firstTicket.question;
			AnswerTicket.find({ ticket_id: req.query.ticket_id})
			.skip((PAGE-1)*ITEMS)
			.limit(ITEMS)
				
				.then(chats => {
					
					console.log(chats)

					if (!chats) {
						return res.status(404).send({
							success: false,
							message: "Ticket not found with id " + ticket_id
						});
					}
					chats.splice(0, 0, firstTicket);

					// res.json({
					// 	success: true,
					// 	chats,
					// })
					return chats
					
				})
				
					
				.then(data=>{
					if(PAGE == 1){
						
						res.send({
							success:true,
							data,
						})
					}
					else{
						if(!data[0].question){
							res.send({
								success:true,
								data
							})
						}else{
							return res.send({
								success: true,data : [],
							});	
						}
					}

				})
				.catch(err => {
					if (err.kind === 'ObjectId') {
						return res.status(404).send({
							success: false,
							message: "Ticket not found with id "
						});
					}
					return res.status(500).send({
						success: false,
						message: "Error retrieving note with id "
					});
				});
		}

	})

};

// get all tickets
exports.getAllTickets= (req,res) => {
	// Ticket.find(ticket).then(ticket => {
	// 	console.log(ticket)
	// 	if (!ticket) {
	// 		return res.status(404).send({
	// 			success: false,
	// 			message: "Ticket not found with id " + req.params.ticketId
	// 		});
	// 	}
	// 	res.json({
	// 		success: true,
	// 		ticket,
	// 	})
	// })
	Ticket.find(function(err,result){
		if(err) res.json({message:'error'});
		Ticket.find({}).populate('user_id').exec(function(err,result){
			console.log(result)
			res.json({
				success:true,
				ticket:result
			})
		})
	})
}



exports.findUserTicket = (req, res) => {

	Ticket.find({ user_id: req.query.user_id }).then(ticket => {
		console.log(req.query.user_id)
		if (!ticket) {
			return res.status(404).send({
				success: false,
				message: "Ticket not found with id " + req.params.ticketId
			});
		}
		res.json({
			success: true,
			ticket,
		})
	}).catch(err => {
		if (err.kind === 'ObjectId') {
			return res.status(404).send({
				success: false,
				message: "Ticket not found with id " + req.params.ticketId
			});
		}
		return res.status(500).send({
			success: false,
			message: "Error retrieving note with id " + req.params.ticketId
		});
	});
}



//  Answer to a ticket
exports.answerTicket = (req, res) => {
	console.log(req.body)
	// Validate request
	if (!req.query.text) {
		return res.status(400).send({
			success: false,
			message: "please write a text"
		});
	}

	Ticket.findOne({ _id: req.query.ticket_id }).then(ticket => {

		var operator_unreads = ticket.op_unreads;
		var user_unreads = ticket.user_unreads;

		if (req.query.role == 'user') {

			Ticket.updateOne({ _id: req.query.ticket_id }, { $set: { op_unreads: (operator_unreads + 1) } }, function (err, db) {

			});
		} else if (req.query.role == 'operator') {
			Ticket.updateOne({ _id: req.query.ticket_id }, { $set: { user_unreads: (user_unreads + 1) } }, function (err, db) {
			});
		}
	})

	// Answer to a ticket
	const answerTicket = new AnswerTicket({
		text: req.query.text,
		role: req.query.role,
		ticket_id: req.query.ticket_id,
		fulltime: [
			{
			  date: PersianDate.fullDate(),
			  time: PersianDate.fullTime(),
			},
		  ],
	});

	// Save Ticket in the database
	answerTicket.save()
		.then(data => {
			res.json({
				success: true,
				data
			})
		}).catch(err => {
			res.status(500).send({
				success: false,
				message: err.message || "Some error occurred while creating the ticket."
			});
		});
};



// read ticket message
exports.readMessage = (req, res) => {
	const error = {};
	if (req.query.role == 'operator') {
		AnswerTicket.updateMany({ ticket_id: req.query.ticket_id }, { $set: { is_readed: true } }, (err, result) => {
			if (!err) {
				return res.json({
					success: true,
					result
				})
			} else {
				throw err;
			}
		});
	} else if (req.query.role == 'user') {
		console.log(error)
		AnswerTicket.updateMany({ ticket_id: req.query.ticket_id }, { $set: { is_readed: true } }, (err, result) => {
			if (!err) {
				return res.json({
					success: true,
					result
				})
			} else {
				throw err;
			}
		});
	} else {
		console.log("not found")
	}
}


// Create and Save a new Ticket
exports.create_department = (req, res) => {
	if(!req.body.name) {
        return res.status(400).send({
            message: "please enter name"
        });
    }

    // Create a Note
    const department = new Department({
        name: req.body.name,
    });

    // Save Note in the database
    department.save()
    .then(data => {
        res.json({
			success: true,
			data,
		})
    }).catch(err => {
        res.status(500).send({
            message:"Error"
        });
    });
};


// get all department
exports.getAllDepartment = (req,res) => {
	Department.find().then(department => {
		console.log(department)
		if (!department) {
			return res.status(404).send({
				success: false,
				message: "department not found with id " 
			});
		}
		res.json({
			success: true,
			department,
		})
	})
}

// edit departemnt
exports.getEditDepartment = (req,res) => {
	Department.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

// delete department
exports.deleteDepartment = (req,res) => {
	Department.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}