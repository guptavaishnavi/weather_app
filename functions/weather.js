const request = require('postman-request')

const weather = (query,callback)=>{
   
    const api_key = '32e06eaffa8b2eb06f3269752688ab0f'
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`
   
    request({url,json:true},(error,res,data)=>{

        if(error){
            callback('Connectivity Error',undefined)
        }
        else if(data.error){
            callback('Check the Location',undefined)
        }
        else{
            callback(undefined,data)
        }
        
    })
}

module.exports = weather 