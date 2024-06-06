const fs = require("fs");
const path = require("path");

function deleteFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${filePath}`);
    });
  } catch (err) {
    console.error(`Error deleting files: ${err}`);
  }
}

module.exports = deleteFiles;
