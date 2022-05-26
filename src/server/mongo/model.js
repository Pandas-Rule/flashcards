const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const { cardSchema, usersSchema } = require('/schema');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
  console.error("Error while connecting to DB");
});

const Cards = mongoose.model('cards', cardSchema);
const Users = mongoose.model('users', usersSchema);

module.exports =  { Cards, Users };
