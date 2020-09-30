/* eslint-disable */
var fs = require('fs')

const generateVarFromFile = function (filePath = __dirname + '/demoFileOriginal.txt') {
  const fileAsString = fs.readFileSync(filePath, 'utf-8')

  let buff = Buffer.from(fileAsString);
  let fileAsBase64 = buff.toString('base64');

  return [fileAsString, fileAsBase64]
}

const generateFileFromVar = function (base64var, outFilePath = __dirname + '/demoFileEncoded.txt') {
  let buff2 = Buffer.from(base64var, 'base64');
  let fileAsString = buff2.toString('utf-8');

  fs.writeFileSync(outFilePath, fileAsString);

  return [base64var, fileAsString]
}

function runner() {
  const inputArguments = process.argv.slice(2);
  console.log('helperVar input arguments: ', inputArguments);

  const lookupValue = (value, outputFile) => {
    if (process.env[value]) {
      console.log(`success: actual ${value} value found`)
      generateFileFromVar(process.env[value], outputFile)
    } else {
      throw Error(`error: actual ${value} value not found`)
    }
  }

  inputArguments.forEach((arg) => {
    switch (arg) {
      case 'FIREBASE_JSON':
        lookupValue(arg, __dirname + '/../firebase.json')
        break;
      case 'FIREBASE_RC':
        lookupValue(arg, __dirname + '/../.firebaserc')
        break;
      case 'DOTENV':
        lookupValue(arg, __dirname + '/../.env')
        break;
      default:
        console.log('unknown arg;', arg)
    }
  })
}

runner()

// const itemsToGenerate = ['firebase.json', '.firebaserc', '.env']
// itemsToGenerate.forEach((item) => {
//   const [fileAsString, fileAsBase64] = generateVarFromFile(__dirname + `/../${item}`)
//   console.log(item, fileAsString, fileAsBase64)
// })

exports.module = {
  generateVarFromFile,
  generateFileFromVar,
}
