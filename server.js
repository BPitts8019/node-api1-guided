const express = require("express");
const db = require("./database");

const server = express();

server.use(express.json());

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

server.post("/users", (req, res) => {
   const newUser = db.createUser({
      name: req.body.name,
   });

   res.status(201).json(newUser);
});

server.put("/users/:id", (req, res) => {
   const user = db.updateUser(req.params.id, {
      name: req.body.name,
   });

   if (user) {
      res.json(user);
   }

   res.status(404).json({ message: "User not found" });
});

server.delete("/users/:id", (req, res) => {
   db.deleteUser(req.params.id);
   res.json({ message: "User removed" });
});

server.listen(8080, () => {
   console.log("Server started...");
});
