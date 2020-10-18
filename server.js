// setup environment variables
require('dotenv').config();

// spin up server
const app = require('./backend/app');
app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
