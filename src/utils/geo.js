import axios from 'axios';
//geo API
//const location = "Giriulla";

export const geo = (location) => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=1&appid=3dd7e9b1a84ee32e49e4b805862f4bb1';

        axios.get(url)
            .then(function (response) {
                // handle success
                resolve({
                    name:response.data[0].name,
                    lat: response.data[0].lat,
                    lon: response.data[0].lon
                })
               

            })
            .catch(function (error) {
                // handle error
                reject({error:"Unable to find the Location, please try onother location"})
                
            });

    })
}





