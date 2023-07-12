// Setting the server
const express = require("express");
const app = express();
const routes = require("../routes/index");
const expressLayouts = require("express-ejs-layouts");
// const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const dbConnect = require('../config/db');

const PORT = 5000;

// Connecting to DB
dbConnect();

// CORS (Cross-Origin Resource Sharing) supports and allows the server to respond to requests from different origins.
app.use(cors());

// Morgan sets up the Morgan middleware, which logs HTTP requests to the console. In this case, it uses the 'dev' format, which provides concise and colorful logs for development purposes.
// app.use(morgan('dev'));

// It configures the body-parser middleware to handle URL-encoded form data. It parses the request body and makes it accessible via req.body in subsequent middleware or route handlers. The { extended: true } option allows for complex objects to be encoded in the URL.
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());


// Static folder
app.use(express.static(path.join(__dirname, "../public")));

// Set the PORT
app.listen(PORT, () =>
  console.log(`🌎 Server listening in port: http://localhost:${PORT}`)
);

// Helper to create relative URLs
app.use((req, res, next) => {
  res.locals.urlFor = (path) => {
    return `${req.baseUrl}${path}`;
  };
  next();
});

// Set Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// Set routes
app.use(routes);


