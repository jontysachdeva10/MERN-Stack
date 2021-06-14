const express =  require('express');
const connectDB = require('./config/db');

const app = express();

const registerUser =  require('./routes/register');
// const authUser = require('./routes/auth');
// const loginUser = require('./routes/login');
const ngoRoutes = require('./routes/ngo');

// Init Middleware
app.use(express.json({ extended: false }));

// Routes Middleware
app.use('/register', registerUser);
// app.use('/auth', authUser);
// app.use('/login', loginUser);
app.use('/ngo', ngoRoutes);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));