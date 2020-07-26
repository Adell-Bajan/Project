const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
	question:{
		type:String,
		trim:true,
		required: true
	},
	code:{
		type:Number,
		trim:true,
	},
	user_id:{ 
		type:mongoose.Types.ObjectId,
		ref:'User',
	},
	op_unreads:{ 
		type:Number,
		default:0
	},
	user_unreads:{ 
		type:Number,
		default:0
	}, 
	date:{
		type:Number
	}
	
});

module.exports = mongoose.model('Ticket', TicketSchema);


// module.exports = Ticket;
