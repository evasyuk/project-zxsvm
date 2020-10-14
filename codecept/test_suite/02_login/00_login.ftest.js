/* eslint-disable */
const { registerUserActions, deleteUserActions } = require("../suiteHelper")

Feature('testing login page')

Scenario('check "login" functionality', ({ I }) => {
  const user = registerUserActions(I)
  // const user = registerUserActions(I, true)

  try {
    I.pressKey(["Shift", "G"])
    I.amOnPage('http://localhost:8080/login')

    I.updateField('#email', '')
    I.updateField('#password', '')

    I.fillField('#email', user.email)
    I.fillField('#password', user.password)

    I.click('#loginButton')

    I.waitForElement('#delete-acc-btn', 30)
  } catch (error) {
    console.log(error)
  } finally {
    if (user.created) {
      deleteUserActions(I)
    }
  }
})