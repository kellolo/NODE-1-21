const fs = require("fs");

fs.truncate("./logs/log.txt", () => console.log("done"));
