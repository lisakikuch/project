Project

Name: The Weather Company 
Member: Alberto, Gian, Maheen, Lisa 

Overview: 
Welcome to our project! This is a weather forecasting website focusing on residents and visitors in the Greater Toronto Area. 
Its purpose is to deliver current weather updates to meet the demands of our audience. 
Our approach includes integrating real-time weather data using an open API, employing visually appealing icons, 
and minimal color and design scheme to enhance readability. 
Furthermore, we use Bootstrap to ensure the website is mobile-responsive to accommodate a broad range of devices. 

How to set up and run your project:  
- Prerequisites
  Since the project is built with HTML, CSS, and JavaScript, all you need is modern web browsers such as Chrome, Firefox, Safari or Edge. 

- Running the Project
  1. Download the Project: Clone the repository to your local machine using the following command in your terminal: 
  bash 
  git clone https://github.com/lisakikuch/project.git 
  
  2. Navigate into the folder: Use the command ‘cd project’ to enter the directory containing ‘index.html’. 
  
  3. Run the Project: Open `index.html` in a web browser.
  This file is the main entry point for the web application.
  It contains the HTML structure, links to CSS for styling, and JavaScript for functionality.
  It also integrates Bootstrap for responsive design and fetches weather data through API calls. Opening `index.html` activates these components,
  displaying the weather forecast on your site. 

- Using an API and Bootstrap
  Since the API and Bootstrap are already integrated into the code, no additional installations are required.
  However, please verify that the correct API and necessary Bootstrap components are properly included in the code to ensure it runs smoothly and correctly. 

  1. API
  Fetching Weather Data Using Open-Meteo API 
  Our project uses the Open-Meteo API to fetch real-time weather data for the Greater Toronto Area.
  Ensure the following URL is correctly implemented in your JavaScript code to retrieve weather data:
  https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York 

  2. Bootstrap 
  Make sure you have the following links in your <head> tag. 
  
  Bootstrap CSS:
  
  link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"
  
  Bootstrap Icons:
  
  link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet"
  
  And you have the following before the closing </body> tag,  
  Bootstrap JavaScript Bundle: 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 



 

Contribution guidelines

Thank you for being interested in contributing to the project! To ensure a smooth collaboration, here are some guidelines for contributing and reporting bugs: 

Reporting issues:
- Check Existing Issues: Before creating a new issue, please review the existing issues to ensure your concern hasn't already been reported or resolved.
  This helps avoid duplicates and keeps our issue tracker clean. 

- Detailed Reporting: When you create an issue, include a descriptive title and a detailed description.
  Provide as much relevant information as possible to help us understand the issue. 

- Avoid Questions in Issues: Please do not use the issue tracker for questions.
  Instead, review the project documentation and source code, or contact the project leader directly if needed. 

- Security Bugs: If you discover a security vulnerability, please do not report it on GitHub. Contact the project leader directly to handle the matter securely. 

Pull-requests:
- Review Existing Contributions: Before submitting a Pull Request (PR),
  please look at current and past PRs and issues to see if your contribution has already been discussed or implemented. 

- Scope of Changes: Ensure your changes or new features are beneficial across a broad range of use cases and that they do not negatively impact the existing functionality. 

- Documentation Improvements: Contributions that enhance our documentation, including the README file, are highly encouraged and appreciated. 

By following these guidelines, you help us maintain the quality and integrity of the project. Looking forward to your contributions! 
