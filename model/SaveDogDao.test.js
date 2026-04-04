const dao = require("./SaveDogDao");

test("Always green test", function () {
  expect(1).toBe(1);
});

test("ReadAll Mem has the predefined dogs", function () {
  let lstDogs = dao.getAllDogs();

  expect(lstDogs.length).toBe(8);
});

test("Create a new dog", function () {
  let newdog = {
    name: "Pudgy",
    breed: "Chihuahua",
    age: 9,
    gender: "Male",
    description: "Full of energy",
  };

  let created = dao.createDog(newdog);
  let found = dao.getDogById(created._id);

  expect(created._id).toBe(found._id);
  expect(created.name).toBe(found.name);

  dao.deleteDog(created._id); // cleans up list of dogs
});

test("Update dog", function () {
  let dog = dao.getDogById(1);
  expect(dog.name).toBe("Buddy"); 

  //change the properties of the dog
  dog.name = "Thor";
  dog.age = 5;

  dao.update(dog); // update dog in DAO

  let updated = dao.getDogById(dog._id); // get the updated dog

  //check that the changes were made and saved
  expect(updated.name).toBe("Thor");
  expect(updated.age).toBe(5);

});

test("Update dog by invalid id", function () {
  let fakeDog = {
    _id: 10, 
    name: "Pudgyyy",
    breed: "Chihuahua",
    age: 9,
    gender: "Male",
    description: "Full of energy",
  };

  //try to update a dog with an id that does not exist
  dao.update(fakeDog);

  // dog was not updated or added to list of dogs, so it does nothing
  expect(dao.getAllDogs().length).toBe(8);
});

test("Delete dog", function () {
  let lstDogs = dao.getAllDogs(); // pick an existing dog from the website

  let dogDelete = lstDogs[0]; // get the first dog
  expect(dogDelete.name).toBe("Thor");

  dao.deleteDog(dogDelete._id); // delete the dog
  // expect the dog name to be null
  expect(dao.getDogById(dogDelete._id)).toBeNull();
});
