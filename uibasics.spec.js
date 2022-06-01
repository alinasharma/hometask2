const {test,expect} = require('@playwright/test')

test('handling new page playwright test', async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:3000/");
    console.log(await page.title());

    //css  
    // we will use click , type , textcontent and assert
/*
    await page.locator("#email").type("alina+11@coviu.com");
    await page.locator("#password").type("HelloWorld123!");
    await page.locator("[type='submit']").click();
  */
    console.log(await page.title());



});
