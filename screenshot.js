const puppeteer = require('puppeteer');

const url = process.argv[2];

async function screenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.argv[2]);
  await page.setViewport({
    width: parseInt(process.argv[3]),
    height: parseInt(process.argv[4])
  });
  await page.waitForTimeout(process.argv[5]);
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
};

screenshot();