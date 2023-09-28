const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRoutes = require('./routes/books');
const borrowerRoutes = require('./routes/borrowers');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', bookRoutes);
app.use('/api/borrowers', borrowerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
