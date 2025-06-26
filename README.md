# AT_JS_final-task

Automated Testing in JavaScript Final Task

Base URL: https://www.saucedemo.com/

### Toolset

Test Automation tool: WebDriverIO;<br />
Browsers: Chrome, Edge;<br />
Locators: XPath;<br />
Patterns: Page Object;<br />
Assertions: Mocha, Chai;<br />

Run tests with 'npx wdio run wdio.conf.js'

### UC-1: Test Login form with empty credentials:

Type any credentials into "Username" and "Password" fields.<br />
Clear the inputs.<br />
Hit the "Login" button.<br />
Check the error messages: "Username is required".<br />

### UC-2: Test Login form with credentials by passing Username:

Type any credentials in username.<br />
Enter password.<br />
Clear the "Password" input.<br />
Hit the "Login" button.<br />
Check the error messages: "Password is required".<br />

### UC-3: Test Login form with credentials by passing Username & Password:

Type credentials in username which are under Accepted username sections.<br />
Enter password as secret sauce.<br />
Click on Login and validate the title “Swag Labs” in the dashboard.<br />
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.<br />
