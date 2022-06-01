const {test,expect} = require('@playwright/test');

test('3. delete any item and check if the count is reduced, if yes print item is deleted successfully.',async ({page})=> 
{
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Counter App");

const cartitem1 = page.locator('.container > .card__box > .navbar > .navbar-brand > .badge');
const firstaddbtn1= page.locator('div:nth-child(2) > .row > div > .btn-secondary > .fa');
const firstdeletebtn1= page.locator('div:nth-child(2) > .row > div > .btn-danger > .fa');

//store initial value of cart 
var initvalue1 = parseInt(await cartitem1.allTextContents());

//add item and check the cart value increases
await firstaddbtn1.click();
var firstcartval= parseInt(await cartitem1.allTextContents());
expect(firstcartval).toBeGreaterThan(0);

//delete any item by clicking delete button and check cart count
await firstdeletebtn1.click();
var cartvalafterrefresh= parseInt(await cartitem1.allTextContents());
expect(cartvalafterrefresh).toBe(0);
if (cartvalafterrefresh === 0){
    console.log("the item is deleted successfully.")
}


});