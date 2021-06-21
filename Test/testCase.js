const assert = require('chai').assert;
const makeRequest = require('../website').makeRequest;

var expect = require('chai').expect;

'use strict';
describe('website', function(){
       it('Status code should be 200', function(){

       let result = makeRequest();    
       expect(result).to.eql(200); 

    });
});

