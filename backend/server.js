require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB csatlakozás
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Egyszerű route
app.get('/', (req, res) => {
  res.send('Backend működik');
});

const courtsRouter = require('./routes/courts');
app.use('/courts', courtsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});