require("dotenv").config();
require("express-async-errors");
const express= require("express");
const connection = require("./db");
const userRoutes=require("./routes/users");
const authRoutes=require("./routes/auth");
const songRoutes=require("./routes/songs");
const playistRoutes=require("./routes/playlist");
const app=express();
const cors=require("cors");

connection();
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/login",authRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/playlists",playistRoutes);

const port= process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`))  