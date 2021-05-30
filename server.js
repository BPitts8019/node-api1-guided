const express = require("express");
const db = require("./database");

const server = express();

server.get("/", (req, res) => {
   res.json({ message: "Hello World!" });
});

server.get("/users", (req, res) => {
   const users = db.getUsers();

   res.json(users);
});

server.get("/users/:id", (req, res) => {
   const user = db.getUserById(req.params.id);
   if (user) {
      res.json(user);
      return;
   }

   res.status(404).json({ message: "User not found" });
});

server.listen(8080, () => {
   console.log("Server started...");
});
