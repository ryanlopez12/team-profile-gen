# Team Profile Generator

This application is a team profile generator that is created by command line prompts.  The user is prompted for the manger of the team, followed by the team members consisting of Interns and Engineers.  When selecting an Intern the user is prompted to enter name, id, email, and school.  When selecting an Engineer the user is prompted to enter a name, id, email, and github username.  When selecting a manager the user is prompted to enter name, id number, email, and office number.  This application has 4 passing tests for each user type and employee overall.  After all inputs have been entered and the user selects "No" for adding another employee, the application creates an html page that can be viewed on a web browser.  Github and email are both links that generate an email or link to the users Github.

## Technologies Used

- Node.js
- HTML
- CSS
- Javascript
- Inquirer (node package)
- Jest (node testing package)

## User Story

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Example of Team Created in HTML


![2022-03-06 11_44_22-127 0 0 1_5500_dist_NewTeam html](https://user-images.githubusercontent.com/17996569/156939514-4569a0e9-8dbf-4ab6-ab5a-9e0b1ebb078d.png)
