const express = require('express');
const path = require("path");
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', 'src/views');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/', require('./src/routes/homeRoute'));
app.use('/', require('./src/routes/aboutRoute'));
app.use('/', require('./src/routes/blogsRoute'));
app.use('/', require('./src/routes/contactsRoute'));
app.use('/', require('./src/routes/eventsRoute'));
app.use('/', require('./src/routes/executiveCommitteRoute'));
app.use('/', require('./src/routes/moderatorsRoute'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));