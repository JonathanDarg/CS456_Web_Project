const dao = require("./ContactDAO");
const mongoose = require("mongoose");
require("./DBConnection");

test("Always green test", function () {
  expect(1).toBe(1);
});

test("ReadAll contacts", async function () {
  let lstcontacts = await dao.readAll();
  expect(lstcontacts.length).toBe(0);
});

test("Create new contact", async function () {
  let newcontact = {
    name: "Buddy",
    message: "Hyper",
  };

  let created = await dao.create(newcontact);
  let found = await dao.read(created._id);

  expect(created._id.toString().toBe(found._id.toString()));
  expect(created.name).toBe(found.name);
});

test("Update contact", async function () {
  let newcontact = {
    name: "Rocky",
    message: "Loveable",
  };

  let created = await dao.create(newcontact);
  let contact = await dao.read(created._id);
  expect(contact.name).toBe("Rocky");

  contact.name = "Thor";
  contact.message = "Updated";

  await dao.update(contact);

  let updated = await dao.read(contact._id);

  expect(updated.name).toBe("Thor");
  expect(updated.message).toBe("Updated");
});

test("Delete contact", async function () {
  let newcontact = {
    name: "Thor",
    message: "Testing delete",
  };

  let created = await dao.create(newcontact);
  let found = await dao.read(created._id);
  expect(found.name).toBe("Thor");

  await dao.del(created._id);
});
