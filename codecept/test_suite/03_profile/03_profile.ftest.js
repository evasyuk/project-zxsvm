/* eslint-disable */
const { registerUserActions, deleteUserActions, loginActions } = require("../suiteHelper")

Feature('testing profile page')

Scenario('check change password', ({ I }) => {
  const user = registerUserActions(I)

  try {
    I.click('#change-password-btn')

    I.waitForElement('#password')
    I.waitForElement('#passwordRepeat')
    I.waitForElement('#changePwdButton')

    I.fillField('#password', '654321')
    I.fillField('#passwordRepeat', '654321')

    I.click('#changePwdButton')
    I.pressKey(["Shift", "G"])

    user.password = '654321'

    loginActions(I, user)

  } catch (error) {
    console.log(error)
  } finally {
    deleteUserActions(I)
  }
})

Scenario('change profile picture', ({ I }) => {
  const user = registerUserActions(I)

  try {
    I.waitForElement('#no-avatar-img')

    I.click('#change-photo-btn')

    I.attachFile('#upload-file-input', './codecept/assets/test_profile_picture.png')

    I.waitForElement('#avatar-img', 30)

    // testing "delete" functionality
    I.click('#change-photo-btn')

    I.waitForElement('#delete-photo-btn')
    I.click('#delete-photo-btn')

    I.waitForElement('#no-avatar-img', 30)
  } catch (error) {
    console.log(error)
  } finally {
    deleteUserActions(I)
  }
})
