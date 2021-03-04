const axios = require('axios');

const getLugar = async (dir) => {

    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '1e6d0726f2msh6d0db99131079ecp1f6404jsneac0b6634062'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const lat = data.lat;
    const lng = data.lon;
 
    return {
        direccion,
        lat,
        lng,
    }
}

module.exports = {
    getLugar,
}