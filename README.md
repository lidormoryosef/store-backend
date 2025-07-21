# 🛒 Store Product Management Web App

> 📦 This is the **backend** code of the Store Product Management app.  
> The **frontend** (React client) is available at:  
> 🔗 [https://github.com/lidormoryosef/store-front](https://github.com/lidormoryosef/store-front)

A full-stack product management application that allows users to add, edit, search,sort and delete products with pagination and filtering.

## 🌐 Live Website

Access the deployed version here:  
🔗 [https://store.com](http://51.21.180.66:5000/)

---

## 🧱 Features

- Add/edit/delete products
- Search and filter with pagination
- Sort with pagination
- Client and server side validations
- Swagger API documentation
- Built with React, Node.js, Express, Sequelize & MySQL

---

## 🚀 Running Locally with Docker Compose
   ```bash
   git clone https://github.com/lidormoryosef/store-backend.git
   cd store-backend
   docker-compose up -d

```
Navigate to http://localhost:5000
### ✅ Requirements
   * Docker
---

## 🚀 Running Locally
   ### for server side
   ```bash
   git clone https://github.com/lidormoryosef/store-backend.git
   cd store-backend
   npm i
   mysql -u root -p < db-init/init.sql

```
Enter Your Password
```bash
   node server.js

```
   ### for client side
   ```bash
   git clone https://github.com/lidormoryosef/store-front.git
   cd store-front
   npm i
   npm start

```
   Navigate to http://localhost:3000
   ### ✅ Requirements
   * MySql Cli
## DataBase details in config/db.js
   - Type : MySql
   - Db Name : 'store'
   - user: 'root'
   - password: 'lidor123' // Change To Your Password.
   
