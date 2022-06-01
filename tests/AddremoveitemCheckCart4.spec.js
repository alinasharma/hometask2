const {test,expect} = require('@playwright/test');

test('4. Add any item in the cart and remove it and check if item in the cart is reduced correctly. ',async ({page})=> 
{
    
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Counter App");

    const cartitem = page.locator('.container > .card__box > .navbar > .navbar-brand > .badge');
    const firstaddbtn= page.locator('div:nth-child(2) > .row > div > .btn-secondary > .fa');
    const firstremovebtn = page.locator('div:nth-child(2) > .row > div > .btn-info > .fa');
    const secondaddbtn= page.locator('div:nth-child(3) > .row > div > .btn-secondary > .fa');
    const secondremovebtn = page.locator('div:nth-child(3) > .row > div > .btn-info > .fa');
    

    //store initial value of cart 
    var initvalue = parseInt(await cartitem.allTextContents());

    //add item and check the cart value increases
    await firstaddbtn.click();
    var firstcartval= parseInt(await cartitem.allTextContents());
    expect(firstcartval).toBeGreaterThan(0);

    //remove added first value and check if it is removed
    await firstremovebtn.click();
    var secondcartval= parseInt(await cartitem.allTextContents());
    expect(secondcartval).toBeLessThanOrEqual(0);

    //check initial value same as second cart value after reduction
    expect(secondcartval).toEqual(initvalue);

});
