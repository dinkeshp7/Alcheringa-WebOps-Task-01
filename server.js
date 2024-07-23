const express = require("express");
const path = require('path');
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    const users = response.data.users;
    res.render("index", { users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
