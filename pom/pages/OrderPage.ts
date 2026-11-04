import { Locator, Page } from '@playwright/test'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Button
  readonly orderButton: Button
  readonly usernameField: Input
  readonly phoneField: Input
  readonly commentField: Input
  readonly popupButton: Button

  constructor(page: Page) {
    this.page = page
    this.statusButton = new Button(page, 'openStatusPopup-button')
    this.orderButton = new Button(page, 'createOrder-button')//page.getByTestId('openStatusPopup-button')
    this.usernameField = new Input(page, 'username-input')
    this.phoneField = new Input(page, 'phone-input')
    this.commentField = new Input(page, 'comment-input')
    this.popupButton = new Button(page, 'orderSuccessfullyCreated-popup-ok-button')

  }

  async createOrder(): Promise<void> {
    await this.orderButton.click()
  }
}
