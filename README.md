# Project: API for contacts students

## Description 📜
**This API is designed to work with a collection of contacts, and there is also authentication by user. the backend interacts with the MongoDB database**

## Functionality ⭐
The API functionality is designed to manage contacts using the operations of adding, deleting, editing, and filtering. Pagination is implemented in the system for convenience and optimization. The API has user authentication. In addition, the backend supports uploading photos and sending emails.

## Technical part 🛠️
The API uses MongoDB for data storage and is deployed on render.com. Swagger is used for documentation, Brevo and Nodemailer for sending emails, and Cloudinary for storing photos.
[API documentation](https://contacts-dk78.onrender.com/api-docs/)

### Use skills:
<p align="left">
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
</p>

### Use libraries📚:
- eslint (v. ^9.14.0)
- nodemon (v. ^3.1.7)
- @redocly/cli (v. ^1.25.11)
- bcrypt (v. ^5.1.1)
- cloudinary (v. ^2.5.1)
- cookie-parser (v. ^1.4.7)
- cors (v. ^2.8.5)
- dotenv (v. ^16.4.5)
- express (v. ^4.21.1)
- handlebars (v. ^4.7.8)
- http-errors (v. ^2.0.0)
- joi (v. ^17.13.3)
- jsonwebtoken (v. ^9.0.2)
- mongoose (v. ^8.8.1)
- multer (v. ^1.4.5-lts.1)
- nodemailer (v. ^6.9.16)
- pino-http (v. ^10.3.0)
- pino-pretty (v. ^13.0.0)
- swagger-jsdoc (v. ^6.2.8)
- swagger-ui-express (v. ^5.0.1)

### Project structure🗃️:
```
├── docs/
├── node_modules/
├── src/
│   ├── constants/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── routers/
│   ├── services/
│   ├── templates/
│   ├── utils/
│   ├── validation/
│   ├── index.js
│   └── server.js
├── swagger/
├── temp/
├── uploads/
├── .editorconfig
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── redocly.yaml
```
