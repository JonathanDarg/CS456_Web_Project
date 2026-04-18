const dao = require('../model/contactDAO');


exports.getAll = async function(req,res){
    res.status(200);
    res.send( await dao.readAll() );
    res.end();
};    

exports.get = async function(req,res){
    let id = req.params.id; 

    let contact = await dao.read(id);

    if(contact != null){
        res.status(200);
        res.send(contact);
    } else {
        res.status(404);
        res.send({msg:'The Contact message with this ID does not exists'});
    }
    res.end();
}

exports.postCreateUpdate = async function(req,res){

    let name = req.body.name;
    let message = req.body.message;
 
    if(req.body.txt_id && req.body.txt_id !== ""){
        // update operation
        console.log("Update...");
        let id = req.body.txt_id; 

        let newcontact = {_id: id, name: name, message: message};

        await dao.update(newcontact);

    } else {
        // create/insert operation
        let newcontact = { name: name, message: message };

        await dao.create(newcontact);
    }

    res.redirect("../../view/WebPage/contactpage.html");
}

exports.getDelete = async function(req, res) {
    let id = req.params.uid;  
    
    try {
        const result = await dao.del(id);
        res.status(200).send({ msg: 'Deleted successfully' });
        
    } catch(err) {
        res.status(500).send({ msg: err.message });
    }
};
