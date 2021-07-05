const assert = require('chai').assert;
// const util = require('C:\\Users\\akash\\OneDrive\\Desktop\\Internship\\utils');
const util = require('..\\utils');
var expect = require('chai').expect;
const baseURL = 'https://www.vperfumes.com/'


'use strict';

async function getResponseStatus() {
    return getResponseStatus()
  }

async function getResponseTime() {
    return getResponseTime()
    
}

async function getResponseSize() {
    return getResponseSize()
    
}
console.log("Response Status Test Cases")

  describe('response status of the home site should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'home');
      expect(result).to.eql(200);
    })
  })

  describe('response status of the product page should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'product/products-listing');
      expect(result).to.eql(200);
    })
  })

  describe('response status of the PDP should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
      expect(result).to.eql(200);
    })
  })

  describe('response status of the cart site should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/cart');
      expect(result).to.eql(200);
    })
  })

// ...........................console.log("Response Time Test Cases")......................//


//   describe('response time should be less than 1000', () => {
//       it('less than 1000', async () => {
//           const result = await util.getResponseTime(baseURL+'home');
//           expect(result).to.be.at.least(1000);
//       })
//   })

//   describe('response time should be less than 1000', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseTime(baseURL+'product/products-listing');
//         expect(result).to.be.at.least(1000);
//     })
// })
     

// describe('response time should be less than 1000', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseTime(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
//         expect(result).to.be.at.least(1000);
//     })
// })
     

// describe('response time should be less than 1000', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseTime(baseURL+'products/cart');
//         expect(result).to.be.at.least(1000);
//     })
// })


//..................... console.log("Response Size Test Cases")..............................//


//   describe('response size should be less than 1000 kBs', () => {
//       it('less than 1000', async () => {
//           const result = await util.getResponseSize(baseURL+'home');
//           expect(result).to.be.at.least(1000);
//       })
//   })

//   describe('response size should be less than 1000 kBs', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseSize(baseURL+'product/products-listing');
//         expect(result).to.be.at.least(1000);
//     })
// })

// describe('response size should be less than 1000 kBs', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseSize(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
//         expect(result).to.be.at.least(1000);
//     })
// })

// describe('response size should be less than 1000 kBs', () => {
//     it('less than 1000', async () => {
//         const result = await util.getResponseSize(baseURL+'products/cart');
//         expect(result).to.be.at.least(1000);
//     })
// })

