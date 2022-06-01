const {test,expect} = require('@playwright/test');

test('2. Add item in the cart and refresh and verify if the cart is empty ',async ({page})=> 
{
    
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Counter App");

const cartitem1 = page.locator('.container > .card__box > .navbar > .navbar-brand > .badge');
const firstaddbtn1= page.locator('div:nth-child(2) > .row > div > .btn-secondary > .fa');
const firstremovebtn1 = page.locator('div:nth-child(2) > .row > div > .btn-info > .fa');
const secondaddbtn1= page.locator('div:nth-child(3) > .row > div > .btn-secondary > .fa');
const secondremovebtn1 = page.locator('div:nth-child(3) > .row > div > .btn-info > .fa');
const refreshbtn1= page.locator('.card__box > div > .row > div > .btn-success');

//store initial value of cart 
var initvalue1 = parseInt(await cartitem1.allTextContents());

//add item and check the cart value increases
await firstaddbtn1.click();
var firstcartval= parseInt(await cartitem1.allTextContents());
expect(firstcartval).toBeGreaterThan(0);

//click on refresh button and check the value of cart
await refreshbtn1.click();
var cartvalafterrefresh= parseInt(await cartitem1.allTextContents());
expect(cartvalafterrefresh).toBeCloseTo(0);
expect(initvalue1).toBeCloseTo(cartvalafterrefresh);

});