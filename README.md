# Borehole Request App

## Overview

The Borehole Request App is a simple web application designed for users to submit requests for borehole installation services. The app collects user details such as name, contact information, location, system requirements, and additional preferences.

This project was created as part of a beginner-level web development phase at **Moringa School**, using basic **HTML**, **CSS**, and **JavaScript** to demonstrate understanding of forms, validation, and simple user interaction.

---

## Features

- Simple and responsive form for submitting requests
- Allows users to select their country from a dropdown
- Phone number field with automatic country code handling
- Borehole system category selection with images for better decision-making
- Fields for technical details like system size, flow rate, diameter, depth, and budget
- Currency unit updates based on selected country
- Legal terms and privacy policy checkboxes for user agreement
- Light/Dark mode toggle for improved user experience
- Confirmation pop-up after successful form submission
- The pop-up displays quickly after submission underneath the button
- After submission, the page clears and allows the user to input data again to make a different request

---

## Technologies Used

- **HTML5** — Page structure and form elements
- **CSS3** — Styling for layout and responsiveness
- **JavaScript** — Basic form handling, validation, and interactivity
- **JSON Server (Optional)** — Simulated backend for storing form submissions during development

---

## Setup and Usage

1. Clone or download the project folder
2. Ensure images for system categories are placed in the `/images` folder
3. Open `index.html` in a web browser to run the application

### Optional (For Simulating Data Storage with JSON Server)

If you want to simulate backend data saving:

- Install JSON Server:
  ```bash
  npm install -g json-server
Once the json server is installed be rest assured that when running it in the background it will surely function.
Go live with the index.html in order to see features hosted in the web app
fill the required details and submit your request
Upon submission the fields will clear to allow the user fill again with different opinions they have
When user selects country it helps in changing currency upon the budget field 

Make sure your fetch requests in index.js point to http://localhost:3000/requests.

Notes
This project is for learning and academic demonstration purposes

Focus is on simplicity, clean layout, and beginner-friendly code structure

Image files should be replaced with real images if necessary

Backend functionality is optional and meant for local development testing only

Author
Developed by a student at Moringa School, with approximately 2 months of coding experience, as part of their beginner web development project.
With recognition of my technical mentor Solomon Kitonyi for the assistance during the project

incase of any inquiry kindly email: pascaldenzel7@gmail.com

