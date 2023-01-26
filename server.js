const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//const exercises = require('./models/exercise.model')
//const users = require('./models/user.model')

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
//const exerciseData = require('./utilities/exerciseData');
//const userData = require('./utilities/userData');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
// Routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Seeding the db
// app.get('/seed', async (req, res) => {
//     await exercises.deleteMany({});
//     await exercises.insertMany(exerciseData);
//     res.send('done!');
//   });
//   app.get('/seed2', async (req, res) => {
//     await users.deleteMany({});
//     await users.insertMany(userData);
//     res.send('done!');
//   });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});