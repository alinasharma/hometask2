const {test,expect} = require('@playwright/test');

test('1. Test add all item in zero card two times if the count in cart',async ({page})=> 
{
    
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Counter App");

const cartitem = page.locator('.container > .card__box > .navbar > .navbar-brand > .badge');
const firstaddbtn= page.locator('div:nth-child(2) > .row > div > .btn-secondary > .fa');
const firstremovebtn = page.locator('div:nth-child(2) > .row > div > .btn-info > .fa');
const secondaddbtn= page.locator('div:nth-child(3) > .row > div > .btn-secondary > .fa');
const secondremovebtn = page.locator('div:nth-child(3) > .row > div > .btn-info > .fa');
const thirdaddbtn= page.locator('div:nth-child(4) > .row > div > .btn-secondary > .fa');
const fourthaddbtn= page.locator('div:nth-child(5) > .row > div > .btn-secondary > .fa');
const refreshbtn= page.locator('.card__box > div > .row > div > .btn-success');
const allinputfield= page.locator('.row .badge');
const allPlusbtn= page.locator('div .btn-secondary .fa-plus-circle');
const allremovebtn= page.locator('.btn .fa.fa.fa-minus-circle');
const firstinputfield= page.locator('div > div:nth-child(2) > .row > div > .badge');
const secondinputfield= page.locator('div > div:nth-child(3) > .row > div > .badge');
const thirdinputfield= page.locator('div > div:nth-child(4) > .row > div > .badge');
const fourthinputfield= page.locator('div > div:nth-child(5) > .row > div > .badge');


const plusbtncount= await allPlusbtn.count();
//console.log(plusbtncount);

//await allPlusbtn.nth(0).click;
//await allPlusbtn.nth(1).click;

   await firstaddbtn.click();
   await firstaddbtn.click();
   await secondaddbtn.click();
   await secondaddbtn.click();
   await thirdaddbtn.click();
   await thirdaddbtn.click();
   await fourthaddbtn.click();
   await fourthaddbtn.click();

   var totalinputfield=0;
   
   var allinputfieldtotal = (parseInt(await firstinputfield.allTextContents())+
   parseInt(await secondinputfield.allTextContents())+
   parseInt(await thirdinputfield.allTextContents())+
   parseInt(await fourthinputfield.allTextContents()));
   console.log(allinputfieldtotal);

var finalcartValue= parseInt(await cartitem.allInnerTexts());
console.log(finalcartValue);

if (finalcartValue === allinputfieldtotal )
{
    console.log("all the items are added successfully");
}

expect(finalcartValue).toBe(allinputfieldtotal);

});