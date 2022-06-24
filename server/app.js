const path = require("path");
const express = require("express");
const morgan = require("morgan");
const db = require('./db')
const { User } = db.models
const app = express();
app.engine('html', require('ejs').renderFile);
module.exports = app;
const favicon = require("serve-favicon");
require("dotenv").config();

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

//app.use(express.static(path.join(__dirname, '../public')));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "..", "public/index.html")));

//*********************google oath**************************//

//scopes
const scopes = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'];

const GOOGLE_AUTH_URI = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.GOOGLE_CALLBACK_URI}&prompt=consent&response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&scope=${scopes.join(' ')}&access_type=offline`;

// ????
app.get('/googleOauth', (req, res)=> res.redirect(GOOGLE_AUTH_URI));

app.get('/googleCallback', async (req, res, next)=> {
  try {
    res.send(`
      <html>
        <head>
        </head>
        <body>
          <script>
            window.localStorage.setItem('token', '${await User.loginViaGoogle(req.query.code)}');
            window.location = '/';
          </script>
        </body>
      </html>
    `);
  }
  catch(ex){
    next(ex);
  }
});

//********************************************************************************************** */

//********************* Stripe **************************//



//******************************************************//

const renderHomePage = (req, res)=> {
  res.render(path.join(__dirname, '..', 'public/index.html'));
}

app.get('/', renderHomePage);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', renderHomePage); 

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})




// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
