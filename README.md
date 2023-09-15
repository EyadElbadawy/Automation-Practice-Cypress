# Wowflow-test-assignment
# Project Setup and Execution Guide

Before running the project, ensure that you have the necessary tools and dependencies installed. Follow the steps below to set up and run the project successfully.

## Prerequisites

1. **Visual Studio Code:** Install Visual Studio Code, a lightweight and powerful code editor, from [https://code.visualstudio.com/](https://code.visualstudio.com/).

2. **Node.js:** Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/). Node.js is required to execute JavaScript-based tools like Cypress.

## Project Setup

1. **Clone the Project:** Clone the project repository to your local machine using Git or download it as a ZIP archive.

2. **Open the Project in Visual Studio Code:**
   - Launch Visual Studio Code.
   - Click on "File" > "Open Folder" and select the folder containing the project files.

3. **Open the Integrated Terminal:**
   - In Visual Studio Code, go to "View" > "Terminal" to open the integrated terminal.

4. **Install Cypress as a Development Dependency:**
   - In the terminal, navigate to the project folder if you aren't already there.
   - Run the following command to install Cypress as a development dependency:

   ```bash
   npm install cypress --save-dev
   ```

## Running the Project

Now that you have set up the project and installed Cypress, you can run the project's automated tests.

### Interactive Mode (GUI)

To run the project interactively and use the Cypress GUI for test execution:

1. In the terminal, use the following command:

   ```bash
   npx cypress open
   ```

2. Cypress will launch, and a window will appear showing a list of test files. You can click on a test file to run it interactively, see the test execution in real-time, and inspect the results.

### Headless Mode (Background Execution)

To run the project in headless mode for automated execution, suitable for CI/CD environments and generating reports:

1. In the terminal, use the following command:

   ```bash
   npx cypress run
   ```

2. Cypress will run the tests in the background without a GUI. It will execute all the test cases and provide a summary of the results in the terminal.

3. Additionally, Cypress will generate HTML and JSON reports in the "cypress/reports" directory, which you can use for further analysis and reporting.

Now you know how to set up and run the project using Cypress in Visual Studio Code. Happy testing!
