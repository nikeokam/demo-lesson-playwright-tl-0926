import { test, expect, Locator } from '@playwright/test'
import { LoginPage } from '../../pom/pages/LoginPage'
import { faker } from '@faker-js/faker/locale/en'
import { PASSWORD, USERNAME } from '../../config/env-data'
import { OrderPage } from '../../pom/pages/OrderPage'

let loginPage: LoginPage
let errorPopup: Locator

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await loginPage.open()
  errorPopup = page.getByTestId('authorizationError-popup')
})

test('TL-17-3 signIn button disabled when incorrect data inserted', async ({}) => {
  await loginPage.open()
  await loginPage.usernameField.fill(faker.lorem.word(2))
  await loginPage.passwordField.fill(faker.lorem.word(7))
  await loginPage.signInButton.checkVisible()
  await loginPage.signInButton.checkEnabled(false)
})

test('TL-17-4 error message displayed when incorrect credentials used', async ({}) => {
  // implement test
  await loginPage.usernameField.fill(faker.lorem.word(2))
  await loginPage.passwordField.fill(faker.lorem.word(9))
  await loginPage.signInButton.click()

  await expect(errorPopup).toBeVisible()
})

test('TL-17-5 login with correct credentials and verify order creation page', async ({ page }) => {
  const orderCreationPage = new OrderPage(page)

  await loginPage.open()
  await loginPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.statusButton.checkVisible()
  await orderCreationPage.usernameField.checkVisible()
  await orderCreationPage.phoneField.checkVisible()
  await orderCreationPage.commentField.checkVisible()
})

test('TL-17-6 login and create order', async ({ page }) => {
  // implement test
  const orderCreationPage = new OrderPage(page)
  await loginPage.signIn(USERNAME, PASSWORD)

  await orderCreationPage.usernameField.fill(faker.lorem.word(6))
  await orderCreationPage.phoneField.fill('+8547737737')
  await orderCreationPage.commentField.fill(faker.lorem.word(7))
  await orderCreationPage.createOrder()
  await orderCreationPage.popupButton.checkVisible()
})
