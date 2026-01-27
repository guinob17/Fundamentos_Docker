const express = require ('express');
const restful = require ('node-restful');
const server = express ();
const mongoose = restful.mongoose;

// Database Connection
mongoose.promise = global.Promise;
mongoose.connect ('mongodb://db/mydb');

// Teste
server.get ('/', (req, res, next) => {
  res.send ('Backend is working!');
});

// Start Server
server.listen (3000);