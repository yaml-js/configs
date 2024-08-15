const fs = require('fs');
const path = require('path');
const sourcePath = path.join(__dirname, '.editorconfig');
const destinationPath = path.join(process.cwd(), '.editorconfig');

console.log('Copying .editorconfig file to the root of the project');

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) console.error('Error occurred while copying the .editorconfig file', err);
});
