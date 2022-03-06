const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("getGithub() should return Engineer github", () => {
    const testGithub = "rlopez12";
    const engineer = new Engineer(
      "Ryan",
      2022,
      "asdf@asdf.com",
      testGithub
    );
    expect(engineer.getGithub()).toBe(testGithub);
  });