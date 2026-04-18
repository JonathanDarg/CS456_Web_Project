const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: String,
    message: String, 
});

const contactModel = mongoose.model('contact', contactSchema);

exports.readAll = async function(){
    const lstcontacts = await contactModel.find();
    return lstcontacts;
}

exports.read = async function(id){
    const contact = await contactModel.findById(id);
    return contact;
}

exports.create = async function(contact){
    const mongocontact = new contactModel(contact);
    await mongocontact.save();
    return mongocontact;
}

exports.update = async function(contact){
    return await contactModel.findByIdAndUpdate(
        contact._id,
        { name: contact.name, message: contact.message },
        { new: true, runValidators: true }
    );
}

exports.del = async function(id){
    const contact = await contactModel.findByIdAndDelete(id);
    return contact;
}

exports.deleteAll = async function(check){
    if(check === "test"){
        await contactModel.deleteMany();
    }
}

