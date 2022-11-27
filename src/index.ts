import express from "express";
import { connectDB } from "./config/db";

const app = express();

import registerUser from "./routes/register";
import ngoRoutes from "./routes/ngo";

// Init Middleware
app.use(express.json());

// Routes Middleware
app.use("/register", registerUser);
app.use("/ngo", ngoRoutes);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
