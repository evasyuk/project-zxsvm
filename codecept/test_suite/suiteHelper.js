/* eslint-disable */
const registerUserActions = (I, getDebug = false) => {
  if (getDebug) {
    return {
      created: false,
      email: `1@1.com`,
      password: '123456',
    }
  }

  const date = new Date()
  const pseudo = + date

  const user = {
    created: true,
    phone: '+38' + `${pseudo}`.substr(2, 10),
    name: 'User',
    email: `dev.${pseudo}@dev.com`,
    password: `${pseudo}`,
  }

  I.amOnPage('http://localhost:8080/sign_up')
  I.pressKey(["Shift", "G"])

  I.fillField('#sign-up-name-input', user.name)
  I.fillField('#sign-up-email-input', user.email)
  I.fillField('#sign-up-phone-input', user.phone)
  I.fillField('#sign-up-password-input', user.password)
  I.fillField('#sign-up-confirm-password-input', user.password)
  I.click('#sign-up-privacy-agreed-checkbox')

  I.click('#sign-up-submit-btn')

  I.waitForElement('#delete-acc-btn', 30)

  return user
}

const deleteUserActions = (I) => {
  I.waitForElement('#delete-acc-btn', 30)
  I.click('#delete-acc-btn')
  I.fillField('#delete-acc-input', `delete account`)
  I.click('#delete-account-confirm-btn')
  I.amOnPage('http://localhost:8080/login')
}

exports.registerUserActions = registerUserActions
exports.deleteUserActions = deleteUserActions
