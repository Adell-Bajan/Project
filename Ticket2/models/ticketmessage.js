const mongoose = require('mongoose');

const TicketChatSchema = mongoose.Schema({
	text:{
		type:String,
		trim:true,
		required: true
	},
    role: {
        type: String,
        trim: true,
        required: true,
        enum: ['user','operator']
    },
	ticket_id:{ 
		type:mongoose.Types.ObjectId,
		ref:'Ticket',
	},
	fulltime: [{
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }],
	
});

module.exports = mongoose.model('Ticketchat', TicketChatSchema);