# AT_JS_final-task

Automated Testing in JavaScript Final task

Base URL: https://www.saucedemo.com/

### UC-1 Test Login form with empty credentials:

Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".

### UC-2 Test Login form with credentials by passing Username:

Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".

### UC-3 Test Login form with credentials by passing Username & Password:

Type credentials in username which are under Accepted username sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.

### Toolset

Test Automation tool: WebDriverIO;
Browsers: Chrome, Edge;
Locators: XPath;
Patterns: Page Object;
Assertions: Mocha, Chai;
