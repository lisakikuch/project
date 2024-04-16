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
