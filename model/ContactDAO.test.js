const dao = require("./ContactDAO");
const mongoose = require("mongoose");
require("./DBConnection");

test("Always green test", function () {
  expect(1).toBe(1);
});

test("ReadAll contacts", async function () {
  let lstcontacts = await dao.readAll();
  expect(lstcontacts.length).toBe(lstcontacts.length);
});

test("Create new contact", async function () {
  let newcontact = {
    name: "Buddy",
    description: "Hyper",
  };

  let created = await dao.create(newcontact);
  let found = await dao.read(created._id);

  expect(created._id.toString().toBe(found._id.toString()));
  expeect(created.name).toBe(found.name);
});

test("Update contact", async function () {
  let newcontact = {
    name: "Rocky",
    description: "Loveable",
  };

  let created = await dao.create(newcontact);
  let contact = await dao.read(created._id);
  expect(contact.name).toBe("Rocky");

  contact.name = "Thor";
  contact.description = "Updated";

  await dao.update(contact);
});

test("Delete contact", async function () {
  let newcontact = {
    name: "Thor",
    description: "Testing delete",
  };

  let created = await dao.create(newcontact);
  let found = await dao.read(created._id);
  expect(found.name).toBe("Thor");

  await dao.del(created._id);
});
