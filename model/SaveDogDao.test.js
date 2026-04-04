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

  dao.deleteDog(created.id);
});

test("Update dog", function () {
  let dog = {
    // create the dog
    name: "Luke",
    breed: "Golden Retreiver",
    age: 4,
    gender: "Male",
    description: "Energetic",
  };

  let newdog = dao.createDog(dog); // create the new dog

  let found = dao.getDogById(newdog._id); 
  expect(newdog.name).toBe(found.name); // make sure that it exists

  //change newdogs name or other info and expect the changes

  dao.update(newdog); // update dog
  expect(newdog.name).toBe("Thor"); // assert name
});

test("Delete dog", function () {
  let lstDogs = dao.getAllDogs(); // pick an existing dog from the website

  let dogDelete = lstDogs[0]; // get the first dog
  expect(dogDelete.name).toBe("Buddy");

  dao.deleteDog(dogDelete._id); // delete the dog
  // expect the dog name to be null 
  expect(dao.getDogById(dogDelete._id)).toBeNull();
});
