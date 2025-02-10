import { chromium, Page, Browser, BrowserContext, devices } from '@playwright/test'
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber'
import { pageFixture } from '../pages/pageFixture';
import { invokeBrowser } from '../helpers/browsers';
import { setDefaultTimeout } from '@cucumber/cucumber'

let browser:Browser;
let context:BrowserContext;
let page:Page;

setDefaultTimeout(60 * 1000);

Before(async function({pickle}){
    browser = await invokeBrowser()
    let scenarioName = pickle.name + pickle.id;
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = await page;
})

/*
AfterAll(async function(){
    await pageFixture.page.close()
    await context.close()
})
*/

After(async function({ pickle, result }){
    if(result?.status == Status.FAILED){
        const images = await pageFixture.page.screenshot({ path: `./report/screenshot/${pickle.name}.png`, type:'png'})
        await this.attach(images, "image/png")
    }
    await pageFixture.page.close()
    await context.close()
    await browser.close()
})