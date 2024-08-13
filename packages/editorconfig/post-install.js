const fs = require('fs');
const path = require('path');
const sourcePath = path.join(__dirname, 'config.txt');
const destinationPath = path.join(process.cwd(), 'config.txt');
fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) console.error('Error occurred while copying the .editorconfig file', err);
});
