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

exports.read = async function(uid){
    const contact = await contactModel.findById(id);
    return contact;
}

exports.create = async function(contact){
    const mongocontact = new contactModel(contact);
    await mongocontact.save();
    return mongocontact;
}

exports.update = async function(contact){
    const updated = await contactModel.findByIdAndUpdate(
        contact,
        { new: true, runValidators: true }
    );
    return updated;
}

exports.del = async function(uid){
    const contact = await contactModel.findByIdAndDelete(id);
    return contact;
}

exports.deleteAll = async function(check){
    if(check === "test"){
        await contactModel.deleteMany();
    }
}

