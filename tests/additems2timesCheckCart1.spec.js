const {test,expect} = require('@playwright/test');

test('1. Test add all item in zero card two times if the count in cart',async ({page})=> 
{
    
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Counter App");

const cartitem = page.locator('.container > .card__box > .navbar > .navbar-brand > .badge');
const allinputfield= page.locator('.row .badge');
const allPlusbtn= page.locator('div .btn-secondary .fa-plus-circle');
const firstinputfield= page.locator('div > div:nth-child(2) > .row > div > .badge');
const secondinputfield= page.locator('div > div:nth-child(3) > .row > div > .badge');
const thirdinputfield= page.locator('div > div:nth-child(4) > .row > div > .badge');
const fourthinputfield= page.locator('div > div:nth-child(5) > .row > div > .badge');


const plusbtncount= await allPlusbtn.count();
const inputfieldcount= await allinputfield.count();
console.log("this is the count of the input field "+inputfieldcount);
//console.log(plusbtncount);

   var totalinputfield=0;
   for (let j=0;j<2;j++){   
            for(let i=0;i<inputfieldcount;i++){
                await console.log(i);
                const eachplusbtn = await page.$$('div .btn-secondary .fa-plus-circle');
                await eachplusbtn[i].click();
                //console.log(await eachbtn.allTextContents());
            }
    }
   
    /*
    var allinputfieldtotal=0;
    for(let k=0;k<inputfieldcount;k++){
        const eachinputfield = await page.$$('.row .badge').allTextContents();
        allinputfieldtotal = allinputfieldtotal + parseInt(await eachinputfield[k]);
    }*/

    
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