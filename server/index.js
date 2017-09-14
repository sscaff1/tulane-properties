const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/auth');
const admin = require('./routes/admin');
require('dotenv').config({ path: 'variables.env' });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  mongoose.connect(process.env.DATABASE);
  mongoose.Promise = global.Promise;
  require('./models/User');
  require('./models/Property');
  require('./handlers/passport');

  server.use(
    session({
      secret: process.env.SECRET,
      key: process.env.KEY,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());
  require('./initial');
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(flash());

  server.use('/api/admin', admin);
  server.get('/admin/*', authController.isLoggedIn);
  server.get('/logout', authController.logout);
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
