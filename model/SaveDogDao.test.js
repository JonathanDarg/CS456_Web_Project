const dao = require('./SaveDogDao');

test("Always green test", function(){
    expect(1).toBe(1);
});

test("ReadAll Mem has the predefined dogs", function(){
    let lstDogs = dao.getAll();

    expect(lstDogs.length).toBe(6);
});

test("Create method", function(){
    let newdog = {name:"Pudgy", breed:"Chihuahua", age:9, gender:"Male", description:"Full of energy"};

    let created = dao.save(newdog); 
    let found = dao.getOne(created.id);

    expect(created.id).toBe(found.id); 
    expect(created.name).toBe(found.name);

    dao.deleteDog(created.id); 

});
