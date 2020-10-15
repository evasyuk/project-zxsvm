/* eslint-disable */
const { registerUserActions, deleteUserActions, loginActions } = require("../suiteHelper")

Feature('testing login page')

Scenario('check "login" functionality', ({ I }) => {
  const user = registerUserActions(I)
  // const user = registerUserActions(I, true)

  try {
    I.pressKey(["Shift", "G"])
    I.amOnPage('http://localhost:8080/login')

    loginActions(I, user)
  } catch (error) {
    console.log(error)
  } finally {
    if (user.created) {
      deleteUserActions(I)
    }
  }
})