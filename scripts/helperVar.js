/* eslint-disable */
var fs = require('fs')

const generateVarFromFile = function (filePath = __dirname + '/demoFileOriginal.txt') {
  const fileAsString = fs.readFileSync(filePath, 'utf-8')

  let buff = Buffer.from(fileAsString);
  let fileAsBase64 = buff.toString('base64');

  // console.log('fileAsString', fileAsString)
  // console.log('fileAsBase64', fileAsBase64)

  return [fileAsString, fileAsBase64]
}

const generateFileFromVar = function (base64var, outFilePath = __dirname + '/demoFileEncoded.txt') {
  let buff2 = Buffer.from(base64var, 'base64');
  let fileAsString = buff2.toString('utf-8');

  // console.log('encoded', fileAsString)

  fs.writeFileSync(outFilePath, fileAsString);

  return [base64var, fileAsString]
}

function runner() {

}

runner()

exports.module = {
  generateVarFromFile,
  generateFileFromVar,
}
