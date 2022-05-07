const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4047;
const http = require('http')
const app = express();

const SocketIOController = require('./app/controllers/socketIOController')

const Home = require('./app/routes/home')
const User = require('./app/routes/user')
const Character = require('./app/routes/character')

const corsOptions = {
  cors: {
    methods: ["GET", "POST"],
    credentials: true
  }
}

app.use(cors())
  .use('/', Home)
  .use('/user', User)
  .use('/character', Character)

const serv = http.createServer(app);
serv.listen(PORT, () => {
  SocketIOController(serv,corsOptions)
  console.log(`Server is running on port ${PORT}.`);
});
