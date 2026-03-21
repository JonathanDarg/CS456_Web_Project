const dao = require('../model/SaveDogDao');

exports.getAll = function(req, res) {
    const dogs = dao.getAllDogs();
    if(dogs && dogs.length > 0){
        res.json(dogs);
    } else {
        res.json({ error: "No dogs found" });
    }
};

exports.get = function(req, res) {
    let id = parseInt( req.params.id ); //takes the URL parameter

    let dog = dao.getDogById(id);

    if(dog != null){ // requested user exists
        res.status(200);
        res.send(dog); //send the dog data
    } else { // dog id does not exists
        res.status(404);  // error
        res.send({msg:'Dogwith this ID does not exists'});
    }
    res.end();
};

exports.postCreateUpdate = function(req, res) {
    let dname = req.body.txt_name; 
    let dbreed = req.body.txt_breed;
    let dage = req.body.int_age;
    let ddescription = req.body.txt_description;
    let approved = 0; 

    if (req.body.txt_is_approved ){
        approved = parseInt( req.body.txt_is_approved );
    }

    if(req.body.txt_id && req.body.txt_id !== ""){
        // update operation
        console.log("Update...");
        let id = parseInt( req.body.txt_id);
        let newdog = {_id: id, name: dname, breed:dbreed, age: dage, description: ddescription, is_approved: approved}; //creates a user object (like the ones we have on lstUsers array)
        dao.update(newdog);

    } else {
        // create/insert operation
        let newdog = {name: dname, breed:dbreed, age: dage, description: ddescription, is_approved: approved}; //creates a user object (like the ones we have on lstUsers array)
        dao.createDog(newdog);
    }

    res.redirect("dogspage.html"); 
}

exports.getDelete = function(req, res) {
    const id = parseInt(req.params.id);

   if(id){
        dao.deleteDog(id);
        res.redirect("dogspage.html");
    } else {
        res.json({ error: "Missing ID" });
    }
};
