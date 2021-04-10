const fs = require('fs');

module.exports = async () => {
  try {
    const result = await fs.readFileSync('./resource/db/hello.txt', 'utf-8');
    return result;
  }
  catch(err) {
    console.log(err);
    return 'SOME ERROR';
  }
};