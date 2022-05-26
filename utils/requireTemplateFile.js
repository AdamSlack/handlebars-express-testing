const fs = require('fs');
const callsite = require('callsite');
const path = require("path");

const requireTemplateFile = (filePath) => {
  const stack = callsite();
  const requester = stack[1].getFileName();
  
  return fs.readFileSync(path.resolve(path.dirname(requester), filePath), 'utf-8');
};

module.exports = { requireTemplateFile };