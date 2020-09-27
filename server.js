// setup environment variables
require('dotenv').config();
const connectDB = require('./backend/db');

// load database
connectDB();

// spin up server
const app = require('./backend/app');
app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
