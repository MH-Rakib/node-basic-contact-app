const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", contactRoutes);

// routes
app.get("*", (req, res) => {
  res.send("Please use the valid routes");
});

// Controller

// contact

// Server
const port = 8080;
app.listen(port, () => {
  console.log("server is running");
});
