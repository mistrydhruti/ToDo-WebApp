const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");

app.use(cors());

dotenv.config();
//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    ()=>{
    console.log("connected to db");
});

// Import routes
const listinRoutes = require("./routes/listing");
const userRoutes = require("./routes/user");
// Middlewares
app.use(express.json());

// route Middlewares
app.use("/api/listings", listinRoutes);
app.use("/api/user", userRoutes);
app.listen(3000, () =>{
    console.log("App listening on port 3000");
});