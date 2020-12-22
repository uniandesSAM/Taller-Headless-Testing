const playwright = require('playwright');
const screenshot = 'MockReg.png';
(async () => {
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register')

  await page.click('//*[@id="promptToRun"]/div/button');
  
  await page.type('//html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input', 'Sergio');
  
  await page.type('//html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input', 'Mahecha');
  
  await page.type('//html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input', 'CheMahMart');
  
  await page.type('//html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input', "r4e3w2q1");
  
  await page.click('//html/body/app/div[1]/div/div/div/ng-component/form/div[5]/button');

  await page.waitForNavigation()
  await page.screenshot({ path: screenshot })
  browser.close()
  console.log('See screenshot: ' + screenshot)
})()