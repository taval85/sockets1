const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();

//express utiliza  HTTP  de fondo poreso  se puede utilizar  para inicializarlo y asi  poder combinarlo con el
//funcionamiento  de sockets
let server  = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//IO = comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});