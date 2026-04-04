const dao = require('./SaveDogDao');

test("Always green test", function(){
    expect(1).toBe(1);
});

test("ReadAll Mem has the predefined dogs", function(){
    let lstDogs = dao.getAllDogs();

    expect(lstDogs.length).toBe(8);
});

test("Create a new dog", function(){
    let newdog = {name:"Pudgy", breed:"Chihuahua", age:9, gender:"Male", description:"Full of energy"};

    let created = dao.createDog(newdog); 
    let found = dao.getDogById(created._id);

    expect(created._id).toBe(found._id); 
    expect(created.name).toBe(found.name);

    dao.deleteDog(created.id); 

});

test("Update dog", function() {
    let newdog = { // create the dog 
        name: "Luke",
        breed: "Golden Retreiver",
        age: 4,
        gender: "Male",
        description: "Energetic"
    };

    let created = dao.createDog(newdog);

    let update = dao.createDog(created); //update the dog
    let found = dao.getDogById(created._id);

    expect(update.name).toBe("Thor"); // assert name
    expect(update.age).toBe(5); // assert age
});

test("Delete dog", function()) {

};