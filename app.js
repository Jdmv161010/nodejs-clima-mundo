import { getLugar } from './lugar/lugar';
import { getClima } from './clima/clima';

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;


const getInfo = async (direccion) => {
    try {
        const respLugar = await getLugar(direccion);
        const respClima = await getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${ respLugar } es de ${ respClima }.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}
