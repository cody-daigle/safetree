const { app } = require('./app.js');
const path = require('path');

//dotenv

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});