const fs = require("fs");
const ip = require("ip");

const PATH = "./constants.js";

fs.readFile(PATH, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const address = ip.address();
  const lines = data.split("\n");
  const file = fs.createWriteStream(PATH);

  file.on("error", () => {
    console.log("Error writing host IP to constants.js");
  });

  lines[0] = `export const HOST = "http://${address}";`;
  lines.forEach((line, index) => {
    file.write(line);

    if (index !== lines.length - 1) file.write("\n");
  });
  file.end();
});
