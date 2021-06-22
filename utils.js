const axios = require('axios');
const { response } = require('express');


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

async function getResponseTime(url){
    const config = {
        method: 'GET',
        url: url
    }
    

    const instance = axios.create()
    instance.interceptors.request.use((config) => {
        config.headers['request-startTime'] = process.hrtime()
        return config
    })
    
    instance.interceptors.response.use((response) => {
        const start = response.config.headers['request-startTime']
        const end = process.hrtime(start)
        const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000))
        response.headers['request-duration'] = milliseconds
        return response
    })

    // return parseInt(response)
  
    return instance.get(url).then((response) => {
        console.log(response.headers['request-duration'])
        return parseInt(response)
       
    }).catch((error) => {
        console.error(`Error`)

    })
    // return parseInt(response)
    
}
exports.getResponseTime = getResponseTime;