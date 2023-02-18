var fs = require("fs");

// sorting functionality
const sortAlphabetically = (err, data) => {
  if (err) throw err
  clearFile()
  let words = data.split("\n").sort()
  words.forEach(element => {
    sendToFile(element)
  })
}

const sendToFile = (word) => {
  fs.appendFileSync("sorted.txt", `${word}\n`, (err) => {
    if (err) throw err;
  });
}

const clearFile = () => {
  fs.writeFileSync("sorted.txt", "", (err) => {
    if (err) throw err;
    console.log("sorted.txt file cleared successfully");
  });
}


fs.readFile("unsorted.txt", "utf8", sortAlphabetically);