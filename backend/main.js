const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const functionalityRoutes = require('./functionalities')
const app = express();

//mongodb+srv://admin:admin@cluster0.s3ybb.mongodb.net/teste?retryWrites=true&w=majority

const dev_db_url = 'mongodb+srv://admin:admin@cluster0.s3ybb.mongodb.net/teste?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/functionalities', functionalityRoutes)

let port = 8080
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});