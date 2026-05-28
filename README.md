# BookNow

<p align="center">
  <img src="public/logo.svg" alt="BookNow logo" width="120">
</p>

<p align="center"><b>Look up your favorite books. Add them to our database and share your common interests with other people.</b></p>

---

## Project Description

<p><b>BookNow is a web application that allows users to search for books, add them to a database, and share their interests with others. The application is built using React for the frontend and node.js for the backend, Tailwind CSS and vite are also used. It uses MockAPI as a database to store book information and user data.</b></p>

---

## Project Map

```
projet-final/
├── dist/                 # production build files
│   └── assets/
│       ├── index.css
│       ├── index.js
│       └── logo.png
│   ├── _redirects
│   ├── index.html
│   └── logo.svg
├── node_modules/          # project dependencies
│   └── ...
├── public/
│   ├── logo.svg
│   └── _redirects        # static assets 
├── src/                  # source code
│   └── actions/
│       ├── addBookAction.js        
│       ├── deleteBookAction.js
│       └── editBookAction.js
│   └── assets/
│        └── images/
│            └── logo.png              
│   └── components/
│       ├── BookList.jsx
│       ├── BookListItem.jsx
│       ├── Card.jsx
│       ├── CardContainer.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├─── NavBar.jsx
│       └── Spinner.jsx
│   └── layouts/
│       └── MainLayout.jsx
│   └── loaders/
│       └── bookLoader.js
│   └── pages/
│       ├── AddBookPage.jsx
│       ├── BookDetailPage.jsx
│       ├── BookPage.jsx
│       ├── EditBookPage.jsx
│       ├── FavoriteBooksPage.jsx
│       ├── HomePage.jsx
│       └── NotFoundPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── not-found.html
├── .env.development
├── .env.production
├── .gitignore
├── books.json
├── db.json
├── eslint.config.js
├── index.htm
├── logo.png
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation

<p><b>To run the project, you need to have Node.js and npm installed on your machine. To install this tou can write in the terminal:</b></p>

```bash
npm install
```
<p><b>You will also need react router dom:</b></p>

```bash
npm install react-router-dom@latest
```
<p><b>You will need json-server:</b></p>

```bash
npm i -D json-server@0
```
<p><b>More installations needed:</b></p>

```bash
npm i react-spinners
npm i react-icons
```

<p><b>Now go to the folder Projet-final and open two terminals. One for the server and one to generate the localhost link.</b></p>

```bash
npm run server
npm run dev
```
<p><b>Youre ready to go!</b></p>

---

## Web Page

<p><b>To see the webpage you can also follow this link: </b></p>
https://readbooknow.netlify.app/

<p><b>The API used is MockAPI and is connected via an environment variable. The dist folder contains the compiled files for the production build. This folder is built through the command `npm run build`. And the folder dist is then uploaded to the hosting service.</b></p>

---