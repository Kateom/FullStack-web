const { model, Schema, default: mongoose } = require('mongoose');

const contactSchema = new Schema ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});


//creating the mode for contact collection 
const Contact =   new model('Contact', contactSchema);
module.exports = Contact;