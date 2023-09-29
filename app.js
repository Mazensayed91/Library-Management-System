const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRoutes = require('./routes/books');
const borrowerRoutes = require('./routes/borrowers');
const bookcheckoutRoutes = require('./routes/bookcheckout');
const reportingRoutes = require('./routes/reporting');
const rateLimit = require('./middlewares/rateLimit');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/books', rateLimit, bookRoutes);
app.use('/api/borrowers', rateLimit, borrowerRoutes);
app.use('/api/checkout', bookcheckoutRoutes);
app.use('/api/report', reportingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
