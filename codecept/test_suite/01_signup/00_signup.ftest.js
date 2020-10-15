/* eslint-disable */
const { registerUserActions, deleteUserActions } = require("../suiteHelper")

Feature('testing signup page')

Scenario('check "back to login" button', ({ I }) => {
  I.amOnPage('http://localhost:8080/sign_up')
  I.pressKey(["Shift", "G"])

  I.seeElement('#back-to-login-btn')
  I.click('#back-to-login-btn')
  I.amOnPage('http://localhost:8080/login')
})

Scenario('check "privacy policy" button', ({ I }) => {
  I.amOnPage('http://localhost:8080/sign_up')
  I.pressKey(["Shift", "G"])

  I.seeElement('#sign-up-privacy-policy-btn')
  I.click('#sign-up-privacy-policy-btn')
  I.amOnPage('http://localhost:8080/privacy')
})


Scenario('check "validation rules"', ({ I }) => {
  I.amOnPage('http://localhost:8080/sign_up')
  I.pressKey(["Shift", "G"])

  I.seeElement('#sign-up-name-input')
  I.seeElement('#sign-up-email-input')
  I.seeElement('#sign-up-phone-input')
  I.seeElement('#sign-up-password-input')
  I.seeElement('#sign-up-confirm-password-input')
  I.seeElement('#sign-up-privacy-agreed-checkbox')

  I.fillField('#sign-up-name-input', '1111')
  I.fillField('#sign-up-email-input', '1111')
  I.fillField('#sign-up-phone-input', '1111')
  I.fillField('#sign-up-password-input', '1111')
  I.fillField('#sign-up-confirm-password-input', '11')

  I.click('#sign-up-confirm-password-input')
  I.click('#sign-up-privacy-agreed-checkbox')

  I.seeElement('#sign-up-name-input-error')
  I.seeElement('#sign-up-email-input-error')
  I.seeElement('#sign-up-phone-input-error')
  I.seeElement('#sign-up-password-input-error')
  I.seeElement('#sign-up-confirm-password-input-error')
})

Scenario('create new account', ({ I }) => {
  registerUserActions(I)
  deleteUserActions(I)
})
