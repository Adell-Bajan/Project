const mongoose = require('mongoose');
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
	},
	mobile:{
		type:Number,
		required:true
	},
	role: {
        type: String,
        trim: true,
        enum: ['superAdmin','operator']
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

const User = mongoose.model('User', UserSchema);

module.exports = User;