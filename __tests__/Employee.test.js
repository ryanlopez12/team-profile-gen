const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

test("Create employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});