const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});