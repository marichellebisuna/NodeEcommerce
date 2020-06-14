const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Hello from node js");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
