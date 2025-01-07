require('dotenv').config({ path: './.env' });
const express = require('express');
const { MongoClient } = require('mongodb');
const courtsRouter = require('./routes/courts');

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.DB_URI;

// MongoDB csatlakozás
app.use(express.json());

// MongoDB csatlakozás
MongoClient.connect(uri)
  .then(client => {
    console.log('MongoDB connected');
    const db = client.db('mpapa');
    app.locals.courtsCollection = db.collection('bball-courts');
    // Egyszerű route
    app.get('/', (req, res) => {
      res.send('Backend működik');
      console.log(uri, res); // Ellenőrizheted a DB URI-t
    });

    // További route-ok, például CRUD műveletek a courtsCollection-on
    app.use('/courts', require('./routes/courts'));
    app.get('/courts', async (req, res) => {
      try {
        const courts = await req.app.locals.courtsCollection.find().toArray();
        res.json(courts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Szerver indítása
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Connection error', err));
