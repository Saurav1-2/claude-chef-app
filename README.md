﻿# claude-chef-app
This is a simple React application that generates recipes based on a list of ingredients provided by the user. It uses the Hugging Face API to process the ingredients and recommend a recipe, and displays the recipe in markdown format using `react-markdown`.

## Features

- **Ingredient-Based Recipe Generation**: Users can input a list of ingredients, and the app will suggest a recipe using the Hugging Face language model.
- **Markdown Rendering**: The recipe is displayed in a clean and structured format using `react-markdown`.
- **Asynchronous Data Fetching**: The app fetches data from the Hugging Face API and shows a loading spinner while fetching the recipe.

- ![image](https://github.com/user-attachments/assets/69c69c0f-1e90-4260-b33a-79aedd17ab18)
- ![image](https://github.com/user-attachments/assets/cd9e99b1-4c8d-4c6f-a5db-b0c89806a8d1)



## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool for faster development and optimized production builds.
- **Hugging Face**: A platform for machine learning models, used here to generate recipes.
- **react-markdown**: A library to render markdown text as React components.
- **CSS**: For styling the app.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm)

You will also need a **Hugging Face API token** to access the language model.
