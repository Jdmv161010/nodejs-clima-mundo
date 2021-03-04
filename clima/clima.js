const axios = require('axios');

const getClima = async ( lat, lng ) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lng=${ lon }&appid=2f2a5f11b98f5d2c987239eed793c1a1`)
    
    
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}