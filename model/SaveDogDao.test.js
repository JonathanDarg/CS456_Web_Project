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
    let dog = {
        name: "Luke",
        breed: "Golden Retreiver",
        age: 4,
        gender: "Male",
        description: "Energetic"
    };

)};

test("Delete dog", function()) {

};