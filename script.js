fetch('https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=79.38&current=temperature_2m&hourly=temperature_2m')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#Toronto_temperature').innerText = JSON.stringify(data.current.temperature_2m);
        //Line 41 on html file
    })
    .catch(error => console.error('Error fetching data:', error))

    //Toronto's time for Sunrise/Sunset
    function fetchSunriseSunsetData() {
        fetch('https://api.sunrisesunset.io/json?lat=43.70011&lng=-79.4163')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.querySelector('#Time_sunrise').innerText = data.results.sunrise;
                document.querySelector('#Time_sunset').innerText = data.results.sunset;
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    
    // Call the function to fetch sunrise and sunset data
    fetchSunriseSunsetData();
    

function getCurrentWeekday() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentWeekday = weekdays[currentDate.getDay()];
    return currentWeekday;
    }
    
    // Function to update HTML element with current weekday
function updateCurrentWeekday() {
    const today = getCurrentWeekday();
    document.getElementById('current-weekday').textContent += today;
    }
    
    // Call the function to update the HTML element with current weekday
    updateCurrentWeekday();

function updateTime() {
    var currentDate = new Date(); 
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var am_or_pm = hours >= 12 ? 'PM' : 'AM';
        
    hours = hours % 12;
    hours = hours ? hours : 12; 
        
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
        
    var currentTimeString = hours + ":" + minutes + " " + am_or_pm;
    var currentTimeElement = document.getElementById("current-time");
    //line 37 on the HTMl file
    currentTimeElement.textContent = currentTimeString;
    }

//jQuery    
updateTime();
setInterval(updateTime, 1000);

$(document).ready(function() {
    $('.card').hide().fadeIn(1000);  
});


/*
Hey Maheen, Gian, and Lisa,
    here are the following sources of where I fetched the data for our website

API Source:
    https://open-meteo.com/
        -to select the city, input the city's longitude and latitude
    https://sunrisesunset.io/ca/ontario/toronto/
        -this is where i get the variable data of what time Toronto's sunset & sunrise 
*/


// code for cards

// Location name and coordinates for each city
const locations = [
    {
        locationName: "Toronto",
        coordinates: [
            {lat: "43.7001"},
            {long: "-79.4163"}
        ]

    },

    {
        locationName: "Milton",
        coordinates: [
            {lat: "43.5168"},
            {long: "-79.8829"}
        ]
    },

    {
        locationName: "Barrie",
        coordinates: [
            {lat: "44.4001"},
            {long: "-79.6663"}
        ]
    },

    {
        locationName: "Ajax",
        coordinates: [
            {lat: "43.8501"},
            {long: "-79.0329"}
        ]
    }
]
const arrayLength = locations.length;
// Load Weather Data 
// Data should be in current units (except visibility)
async function getWeather() {
    for (let i = 0; i < arrayLength; i++) {
        const cityName = locations[i].locationName;
        const latitude = locations[i].coordinates[0].lat;
        const longitude = locations[i].coordinates[1].long;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,cloud_cover,wind_speed_10m&hourly=visibility`)
            .then(response => response.json())
            .then(data => {
                // Weather Data extracted from API and stored in variables
                const temperature = data.current.temperature_2m;
                const WindSpeed = data.current.wind_speed_10m;
                const rain = data.current.rain;
                const cloudCoverage = data.current.cloud_cover;
                const visibility = data.hourly.visibility[0];

                // Change Icon depending on the cloud coverage (planning to add nested if else statements)
                // if after the if cloud is 50, if rain == 2mm (show rain icon)
                if (cloudCoverage >= 50) {
                    weatherIcon = `<img src="icons/cloud.png" class="icon-left">`;
                } else if (cloudCoverage >= 20) {
                    weatherIcon = `<img src="icons/sunny-cloud.png" class="icon-left">`;
                } else {
                    weatherIcon = `<img src="icons/sunny.png" class="icon-left">`;
                }
                document.getElementById(`iconCondition${i}`).innerHTML = weatherIcon;

                // Manipulate da DOM // make it another func?
                document.getElementById(`cityName${i}`).textContent = `${cityName}`;
                document.getElementById(`currentTemp${i}`).textContent = `${temperature}°C`;
                document.getElementById(`currentWindSpeed${i}`).innerHTML = `<img src="icons/icons8-wind-90.png"> ${WindSpeed} km/h`;
                document.getElementById(`currentRain${i}`).innerHTML = `<img src="icons/30 a.png"> ${rain} mm`;
                document.getElementById(`currentVisibility${i}`).innerHTML = `<img src="icons/icons8-eye-96.png"> ${visibility} m`;
            })
            .catch(error => console.error('Error fetching data:', error));

        // 0.2 second delay 
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}
getWeather();

// icon attribution