# imageUpload
This application is storing user data in the database. Created using React, Node,  Postgress and Aws

# Creating a new API project
mkdir image-upload-api
cd image-upload-api
npm init -y
npm install --save express
npm install --save-dev nodemon

# Running the app
npm run dev

 "dev": "nodemon index.js", this is the line that we have to include in the script in package.json so we can use npm run dev to start the app..

# Instead of using the old ways of:
const express = require('express'); I am going to use the import. So I have added this line in my package.json
"type": "module", so that I can use import express from 'express'

# Using CLI to create migrations for tables and models in PostgreSQL

# Command to setup CLI
npm install --save sequelize
npm install --save-dev sequelize-cli pg pg-hstore

# npx sequelize-cli init - run this command to initialize our project with Sequelize
This creates the folders needed
