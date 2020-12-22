const puppeteer = require('puppeteer');
const screenshot = 'MockReg.png';
(async () => {
  const browser = await puppeteer.launch({headless: true, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'})
  const page = await browser.newPage()
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register')

  await page.waitForXPath('//*[@id="promptToRun"]/div/button',5000)
  const [boton] = await page.$x('//*[@id="promptToRun"]/div/button');
  await boton.click();
  
  await page.waitForXPath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input',5000)
  const [primernombre] = await page.$x('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input');
  await primernombre.type("Sergio");
  
  await page.waitForXPath('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input',5000)
  const [apellido] = await page.$x('/html/body/app/div[1]/div/div/div/ng-component/form/div[2]/input');
  await apellido.type("Mahecha");
  
  await page.waitForXPath('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input',5000)
  const [nombreusuario] = await page.$x('/html/body/app/div[1]/div/div/div/ng-component/form/div[3]/input');
  await nombreusuario.type("CheMahMart");
  
  await page.waitForXPath('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input',5000)
  const [contrasenha] = await page.$x('/html/body/app/div[1]/div/div/div/ng-component/form/div[4]/input');
  await contrasenha.type("r4e3w2q1");
  
  await page.waitForXPath('/html/body/app/div[1]/div/div/div/ng-component/form/div[5]/button',5000)
  const [botonregistrar] = await page.$x('/html/body/app/div[1]/div/div/div/ng-component/form/div[5]/button');
  await botonregistrar.click();
  

  await page.waitForNavigation()
  await page.screenshot({ path: screenshot })
  browser.close()
  console.log('See screenshot: ' + screenshot)
})()