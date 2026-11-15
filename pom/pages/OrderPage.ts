import { Page } from '@playwright/test'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { BasePage } from './BasePage'

export class OrderPage extends BasePage {
  readonly page: Page
  readonly statusButton: Button
  readonly orderButton: Button
  readonly usernameField: Input
  readonly phoneField: Input
  readonly commentField: Input
  readonly popupButton: Button
  readonly searchOrderInput: Input
  readonly searchButton: Button
  readonly exitButton: Button
  readonly usernameError: Input
  readonly phoneError: Input

  constructor(page: Page) {
    super(page)
    this.page = page
    this.statusButton = new Button(page, 'openStatusPopup-button')
    this.orderButton = new Button(page, 'createOrder-button')//page.getByTestId('openStatusPopup-button')
    this.usernameField = new Input(page, 'username-input')
    this.phoneField = new Input(page, 'phone-input')
    this.commentField = new Input(page, 'comment-input')
    this.popupButton = new Button(page, 'orderSuccessfullyCreated-popup-ok-button')
    this.searchOrderInput = new Input(page, 'searchOrder-input')
    this.searchButton = new Button(page, 'searchOrder-submitButton')
    this.exitButton = new Button(page, 'logout-button')
    this.usernameError = new Input(page, 'username-input-error')
    this.phoneError = new Input(page, 'phone-input-error')
  }

  async createOrder(): Promise<void> {
    await this.orderButton.click()
  }
}
