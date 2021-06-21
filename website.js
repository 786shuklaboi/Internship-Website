const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'head',
        // url: 'https://www.vperfumes.com/products/collectihshddbonproducts-listing/sale-upto-75/605b8afadeab490012e8b1f6'
        url: 'https://www.vperfumes.com/home'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest();

module.exports.makeRequest = makeRequest;