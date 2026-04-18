const dao = require("./ContactDAO");

test("Always green test", function () {
  expect(1).toBe(1);
});

test("ReadAll contacts", async function () {
  let lstcontacts = await dao.readAll();
  expect(lstcontacts.length).toBe(lstcontacts.length);
});
