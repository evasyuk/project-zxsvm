const test = require('ava')

const {
  generateVarFromFile,
  generateFileFromVar,
} = require('./helperVar').module

test('var -> file -> var', (t) => {
  const [fileAsString, fileAsBase64] = generateVarFromFile()

  const [base64, encodedFile] = generateFileFromVar(fileAsBase64)

  t.is(fileAsBase64, base64)
  t.is(fileAsString, encodedFile)
})
