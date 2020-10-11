/* eslint-disable */
Feature('testing landing page')

Scenario('check github button', ({ I }) => {
  I.amOnPage('http://localhost:8080')
  I.pressKey(["Shift", "G"])

  I.seeElement('#github-btn')
  I.click('#github-btn')
  // TODO: check new tab is tricky. Not implemented due to low priority
})

Scenario('check sign up button', ({ I }) => {
  I.amOnPage('http://localhost:8080')
  I.pressKey(["Shift", "G"])

  I.seeElement('#sign-up-btn')
  I.click('#sign-up-btn')
  I.amOnPage('http://localhost:8080/sign_up')
})

Scenario('check login button', ({ I }) => {
  I.amOnPage('http://localhost:8080')
  I.pressKey(["Shift", "G"])

  I.seeElement('#login-btn')
  I.click('#login-btn')
  I.amOnPage('http://localhost:8080/login')
})
