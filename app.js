const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Connexion à MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Exporter l'application Express
module.exports = app;