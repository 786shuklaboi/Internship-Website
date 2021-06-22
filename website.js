const assert = require('chai').assert;
const util = require('./utils');

var expect = require('chai').expect;
const baseURL = 'https://www.vperfumes.com/'

'use strict';

async function getResponseStatus() {
    return getResponseStatus()
  }

async function getResponseTime() {
    return getResponseTime()
    
}

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'home');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'product/products-listing');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/cart');
      expect(result).to.eql(200);
    })
  })
  
  describe('response time should be less than 1000', () => {
      it('less than 1000', async () => {
          const result = await util.getResponseTime(baseURL+'home');
          expect(result).to.be.at.least(1000);
      })
  })

  describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'product/products-listing');
        expect(result).to.be.at.least(1000);
    })
})
     

describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
        expect(result).to.be.at.least(1000);
    })
})
     

describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'products/cart');
        expect(result).to.be.at.least(1000);
    })
})
     
       
