require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const courtsRouter = require('./routes/courts');

const app = express();
const port = process.env.PORT || 3000;
app.use('/courts', courtsRouter);

// MongoDB csatlakozás
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Egyszerű route
app.get('/', (req, res) => {
  res.send('Backend működik');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});