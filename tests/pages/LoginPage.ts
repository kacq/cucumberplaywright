import { subscribe } from "diagnostics_channel";
import { pageFixture } from "./pageFixture";

export default class LoginPage{

    private Elements = {
        username: "#username",
        password: "#password",
        submit_enter: "#login"
    }
/*
test('test', async ({ page }) => {
  await page.goto('&bankId=5&profileId=10&c=1');
  await page.getByRole('textbox', { name: 'Wpisz imię' }).click();
  await page.getByRole('textbox', { name: 'Wpisz imię' }).fill('imie');
  await page.getByRole('textbox', { name: 'Wpisz nazwisko' }).click();
  await page.getByRole('textbox', { name: 'Wpisz imię' }).click();
  await page.getByRole('textbox', { name: 'Wpisz imię' }).dblclick();
  await page.getByRole('textbox', { name: 'Wpisz imię' }).fill('janusz');
  await page.getByRole('textbox', { name: 'Wpisz nazwisko' }).click();
  await page.getByRole('textbox', { name: 'Wpisz nazwisko' }).fill('kowalski');
  await page.locator('div:nth-child(17) > div:nth-child(4)').click();
  await page.getByRole('textbox', { name: 'Wpisz PESEL' }).click();
  await page.getByRole('textbox', { name: 'Wpisz PESEL' }).fill('98060811119');
  await page.locator('div:nth-child(23) > div:nth-child(2)').click();
  await page.locator('#ctl00_CPH_Content__V_customer__Q__dataInput__Q__identityDocumentNumber').click();
  await page.locator('#ctl00_CPH_Content__V_customer__Q__dataInput__Q__identityDocumentNumber').fill('CCM172950');
  await page.locator('#ctl00_CPH_Content__V_customer__Q__contactData__Q__phone').click();
});

    async login(username: string, password: string) {
        await pageFixture.page.locator(this.Elements.username).fill(username)
        await pageFixture.page.locator(this.Elements.username).fill(password)
        await pageFixture.page.locator(this.Elements.submit_enter).click()
    }
        */
}