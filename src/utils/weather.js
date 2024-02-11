import axios from 'axios';



export const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {
        // const lat = 33.44;
        // const lon = 10.99;

        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=3dd7e9b1a84ee32e49e4b805862f4bb1';

        axios.get(url)
            .then(function (response) {
                // handle success
                resolve({weather:"currently : " + response.data.weather[0].main +"    "+"Temperatuer is  " + " " + response.data.main.temp + "C"})
                //console.log("Currentlly : " + response.data.weather[0].main + " Temperatuer is : " + " " + response.data.main.temp + "C");

            })
            .catch(function (error) {
                // handle error
                reject({error:"Unable to find Location, please try onother location"});
                
            });

    })

}

