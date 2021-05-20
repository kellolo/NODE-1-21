const http = require('http');
const socket = require('./modules/socket');
const handleSocket = require('./modules/socketHandler');
const dataBaseCreate = require('./modules/dataBaseHandler');
const app = require('./modules/router');

dataBaseCreate();
const server = http.Server(app);
const io = socket(server);
handleSocket(io);

server.listen(5000, () => { console.log('listen at port 5000...') });
