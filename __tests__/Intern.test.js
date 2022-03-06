const inquirer = require("inquirer");
const Intern = require("../lib/Intern");

test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const intern = new Intern("Bob", 1, "asdf@asdf.com", "UCLA");
    expect(intern.getRole()).toBe(testValue);
  });