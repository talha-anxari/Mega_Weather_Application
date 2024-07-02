/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright talhaanxari 2024 All rights reserved
 * @author talhaanxari <talhaanxaritn@outlook.com>
 * 
 *
 */

'use strict';

const apiKey = 'da822007c8f0559256c6696a00bace61';
// const apiKey = '20fdfb76008f0d97399a7057b61972e9';

/** 
* Fetch data from server
* @param {String} URL API url
* @param {String} callback callback
*/

export const fetchData = function (URL, callback){
    fetch(`${URL}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    
    airPollution (lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGeo (lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /**
     * @param {string} query Search query e.g.: 'London', 'New York'
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}