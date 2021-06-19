const express =  require('express');
const connectDB = require('./config/db');

const app = express();

const registerUser =  require('./routes/register');
const ngoRoutes = require('./routes/ngo');

// Init Middleware
app.use(express.json({ extended: false }));

// Routes Middleware
app.use('/register', registerUser);
app.use('/ngo', ngoRoutes);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));