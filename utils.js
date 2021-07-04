const axios = require('axios');
const { response } = require('express');
const { interfaces } = require('mocha');
const puppeteer = require('puppeteer');
const baseURL = 'https://www.vperfumes.com/'


// ...........RESPONSE STATUS ...............//


async function getResponseStatus(url){
    const config = {
        method: 'GET',
        // url: 'https://www.vperfumes.com/products/collectihshddbonproducts-listing/sale-upto-75/605b8afadeab490012e8b1f6'
        url: url
    }

    let res = await axios(config)

    return res.status

}
exports.getResponseStatus = getResponseStatus;


// // .............RESPONSE TIME.................//

// async function getResponseTime(url){
//     const config = {
//         method: 'GET',
//         url: url
//     }


//     const instance = axios.create()
//     instance.interceptors.request.use((config) => {
//         config.headers['request-startTime'] = process.hrtime()
//         return config
//     })

//     instance.interceptors.response.use((response) => {
//         const start = response.config.headers['request-startTime']
//         const end = process.hrtime(start)
//         const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000))
//         response.headers['request-duration'] = milliseconds
//         return response
//     })

//     // return parseInt(response)

//     return instance.get(url).then((response) => {
//         console.log(response.headers['request-duration'])
//         return parseInt(response)

//     }).catch((error) => {
//         console.error(`Error`)

//     })
//     // return parseInt(response)

// }
// exports.getResponseTime = getResponseTime;


// ................RESPONSE SIZE................//

// 'use strict';

// (async function getResponseSize() {
//   try {
//     const browser = await puppeteer.launch();
//     const [page] = await browser.pages();

//     const response1 = await page.goto(baseURL);
//     console.log(
//       response1.headers()['content-length'],
//       (await response1.buffer()).length
//     );

//     // page.setExtraHTTPHeaders({ 'accept-encoding': 'identity'});

//     await browser.close();
//   } catch (err) {
//     console.error(err);
//   }
// })();

// exports.getResponseSize = getResponseSize;


// ..............................NO IMAGE URLS...................//

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    // page.on('console', msg => console.log('PAGE LOG:', msg.text));
    // page.on('pageerror', error => {
    //     console.log(error.message);
    // });
    page.on('request', (interceptedRequest) => {
        // console.log(typeof (interceptedRequest.url()))

        if (interceptedRequest.resourceType() === 'image' || interceptedRequest.url().includes("prod-admin-images") || interceptedRequest.url().includes("commerceup-publicresources"))
            interceptedRequest.abort();
        else {
            interceptedRequest.continue();
            // console.log(interceptedRequest.url(), "URLs without image")
        }
    });

    await page.goto(baseURL+'/home');
    await browser.close();
})();


// ....................PAGE ERROR........................................//

async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(baseURL+'/home');

    // await page.setRequestInterception(true);
    page.on('console', msg => console.log('PAGE LOG:', msg.text));
    page.on('pageerror', error => {
        console.log(error.message);
    });

    await browser.close();


};

// ....................SCREENSHOTS IN DIFFERENT RESOLUTIONS........................//

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
   
	await page.setViewport({width: 375, height: 667});
	await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	// await fullPageScreenshot(page, {path: './screenshot.jpg', fullPage: true,  
  await page.screenshot({
    path: "./screenshot.jpg",
    type: "jpeg",
    fullPage: true      
  });
  
  await page.setViewport({width: 375, height: 812});
	await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot2.jpg",
    type: "jpeg",
    fullPage: true      
  });

  await page.setViewport({width: 360, height: 640});

    await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
    await page.screenshot({
      path: "./screenshot3.jpg",
      type: "jpeg",
      fullPage: true      
    });
  await page.setViewport({width: 414, height: 816});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot4.jpg",
    type: "jpeg",
    fullPage: true      
  });	
  await page.setViewport({width: 360, height: 740});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot5.jpg",
    type: "jpeg",
    fullPage: true      
  });

  await page.setViewport({width: 360, height: 780});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot6.jpg",
    type: "jpeg",
    fullPage: true      
  });	

  await page.setViewport({width: 414, height: 736});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot7.jpg",
    type: "jpeg",
    fullPage: true      
  });

  await page.setViewport({width: 1920, height: 1080});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot8.jpg",
    type: "jpeg",
    fullPage: true      
  });	

  await page.setViewport({width: 1366, height: 768});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot9.jpg",
    type: "jpeg",
    fullPage: true      
  });	

  await page.setViewport({width: 1440, height: 900});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot10.jpg",
    type: "jpeg",
    fullPage: true      
  });

  await page.setViewport({width: 1536, height: 864});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot11.jpg",
    type: "jpeg",
    fullPage: true      
  });	

  await page.setViewport({width: 1280, height: 720});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot12.jpg",
    type: "jpeg",
    fullPage: true      
  });	

  await page.setViewport({width: 1280, height: 800});
  
  await page.goto(baseURL+'/home', {waitUntil: 'networkidle0', timeout: 0});
	await page.screenshot({
    path: "./screenshot13.jpg",
    type: "jpeg",
    fullPage: true      
  });



  try{
	await browser.close();
  } catch(err) {
    console.log(err);
  }
	})();
