const express = require("express");

require("dotenv").config();
const connectDB = require("./config/db");

//import routes
const userRoutes = require("./routes/user");

const app = express();

//db connect
connectDB();

//routes middleware
app.use("/api", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
