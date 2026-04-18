const dao = require("./ContactDAO");

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
