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
    const id = parseInt( req.params.id );

    const dog = dao.getDogById(id);
    if(dog){
        res.json(dog);
    } else {
        res.json({ error: "Dog not found" });
    }
};

exports.postCreateUpdate = function(req, res) {
    const dogData = req.body;

    if(dogData._id){
        dao.update(dogData);
    } else {
        dao.createDog(dogData);
    }
    res.redirect("dogspage.html");
};

exports.getDelete = function(req, res) {
    const id = parseInt(req.params.id);

   if(id){
        dao.deleteDog(id);
        res.redirect("dogspage.html");
    } else {
        res.json({ error: "Missing ID" });
    }
};
