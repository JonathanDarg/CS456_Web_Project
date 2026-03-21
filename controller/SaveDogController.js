const dao = require('../model/SaveDogDao');

exports.getAll = function(req, res) {
    dao.getAll().then(function(dogs) {
        if (dogs) {
            res.json(dogs);
        } else {
            res.json({ error: "No dogs found" });
        }
    });
};

exports.get = function(req, res) {
    const id = req.params.id;

    dao.getOne(id).then(function(dog) {
        if (dog) {
            res.json(dog);
        } else {
            res.json({ error: "Dog not found" });
        }
    });
};

exports.postCreateUpdate = function(req, res) {
    const dogData = req.body;

    if (dogData) {
        dao.save(dogData).then(function(result) {
            res.json({ success: true, data: result });
        });
    } else {
        res.json({ error: "No data provided" });
    }
};

exports.getDelete = function(req, res) {
    const id = req.params.id;

    if (id) {
        // This is the delete function your partner added
        dao.deleteDog(id).then(function() {
            res.json({ deleted: true, id: id });
        });
    } else {
        res.json({ error: "Missing ID" });
    }
};
