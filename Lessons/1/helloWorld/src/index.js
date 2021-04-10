const read = require('./components/reader');
const ansi = require('ansi');

async function app(color) {
  // console.log(await read());
  const text = await read();
  const cursor = ansi(process.stdout);
  // cursor.blue().write(text).reset();
  cursor[color]().write(text + '\n').reset();
};

app('red');
app('blue');
app('yellow');

// function app2() {
//   read().then(data => console.log(data));
// };

// fs.readFile('./resource/db/hello.txt', 'utf-8', (err, res) => {
//   if (!err) {
//     console.log(res);
//   }
// });

// function read(callback) {
//   fs.readFile('./resource/db/hello.txt', 'utf-8', (err, res) => {
//     if (!err) {
//       callback(res);
//     }
//   });
// };

// function cb(text) {
//   console.log(text);
// };

// read(cb);
