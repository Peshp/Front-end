async function attachEvents() {
    const weatherUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

    const getWeatherBtn = document.getElementById('submit');
    const inputText = document.getElementById('location').value;
    const forecast = document.getElementById('forecast');

    getWeatherBtn.addEventListener('click', (e) => {
        try{
            let response = await fetch(weatherUrl, inputText);
            let weatherInfo = await response.json();


        }
    })
}

attachEvents();