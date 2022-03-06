const constructHTML = (employeeArray) => {
  // Create Manager HTML
  // Create Engineer HTML
  // Create Intern HTML
  // Push all dynamic HTML into a div
  // ???
  // Profit
  const createManagerHTML = (manager) => {
      return `
  <div class="card">
<div class="container">
  <h4><b>${manager.getName()}</b></h4>
  <p>${manager.getRole()}</p>
  <p>${manager.getId()}</p>
  <p><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
  <p>${manager.getOfficeNumber()}</p>
</div>
</div>`;
  };

  const createEngineerHTML = (engineer) => {
      return `
  <div class="card">
      <div class="container">
          <h4><b>${engineer.getName()}</b></h4>
          <p>${engineer.getRole()}</p>
      <p>${engineer.getId()}</p>
      <p><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a</p>
      <p> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
      </div>
  </div> `;
  };

  const createInternHTML = (intern) => {
      return `
  <div class="card">
      <div class="container">
          <h4><b>${intern.getName()}</b></h4>
          <p>${intern.getRole()}</p>
          <p>${intern.getId()}</p>
          <p><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a</p>
          <p> School: ${intern.getSchool()}</a></p>
      </div>
  </div>
      `;
  };

  const html = [];

  html.push(
      employeeArray
          .filter((employee) => employee.getRole() === "Manager")
          .map((manager) => createManagerHTML(manager))
  );
  html.push(
      employeeArray
          .filter((engineer) => engineer.getRole() === "Engineer")
          .map((engineer) => createEngineerHTML(engineer))
          .join("")
  );
  html.push(
      employeeArray
          .filter((intern) => intern.getRole() === "Intern")
          .map((intern) => createInternHTML(intern))
          .join("")
  );

  return html.join("");
};

module.exports = (employeeArray) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
      <div class="row">
              ${constructHTML(employeeArray)}
      </div>
  </div>
</body>
</html>
  `;
}