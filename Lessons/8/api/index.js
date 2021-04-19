const app = require('./router');
const http = require('http');
const server = http.Server(app);
const io = require('./socket')(server);
const handleSocket = require('./socketHandler');

handleSocket(io);


server.listen(5000, () => { console.log(5000) });
