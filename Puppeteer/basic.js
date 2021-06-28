// import puppeteer from "puppeteer";
// import fullPageScreenshot from "puppeteer-full-page-screenshot";
const puppeteer = require('puppeteer');
// const fullPageScreenshot = require('puppeteer-full-page-screenshot');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.on('console', msg => console.log('PAGE LOG:', msg.text));
//   await page.goto('https://www.vperfumes.com/home');
//   await browser.close();
// })();
// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
   
// 	await page.setViewport({width: 375, height: 667});
// 	await page.goto('https://www.vperfumes.com/products/product-detail/ysl-y-le-parfum-100ml-for-men/3614273318105', {waitUntil: 'networkidle0', timeout: 0});
// 	// await fullPageScreenshot(page, {path: './screenshot.jpg', fullPage: true,  
//   await page.screenshot({
//     path: "./screenshot.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });
  
//   await page.setViewport({width: 375, height: 812});
// 	await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot2.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });

//   await page.setViewport({width: 360, height: 640});

//     await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
//     await page.screenshot({
//       path: "./screenshot3.jpg",
//       type: "jpeg",
//       fullPage: true      
//     });
//   await page.setViewport({width: 414, height: 816});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot4.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	
//   await page.setViewport({width: 360, height: 740});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot5.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });

//   await page.setViewport({width: 360, height: 780});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot6.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	

//   await page.setViewport({width: 414, height: 736});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot7.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });

//   await page.setViewport({width: 1920, height: 1080});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot8.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	

//   await page.setViewport({width: 1366, height: 768});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot9.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	

//   await page.setViewport({width: 1440, height: 900});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot10.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });

//   await page.setViewport({width: 1536, height: 864});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot11.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	

//   await page.setViewport({width: 1280, height: 720});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot12.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });	

//   await page.setViewport({width: 1280, height: 800});
  
//   await page.goto('https://www.vperfumes.com/home', {waitUntil: 'networkidle0', timeout: 0});
// 	await page.screenshot({
//     path: "./screenshot13.jpg",
//     type: "jpeg",
//     fullPage: true      
//   });



//   try{
// 	await browser.close();
//   } catch(err) {
//     console.log(err);
//   }
// 	})();