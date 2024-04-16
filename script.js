fetch('https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=79.38&current=temperature_2m&hourly=temperature_2m')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#Up-to-date-weather').innerText = JSON.stringify(data.current.temperature_2m);
        //Line 41 on html file
    })
    .catch(error => console.error('Error fetching data:', error))

    //Toronto's time for Sunrise
fetch('https://api.sunrisesunset.io/json?lat=43.70011&lng=-79.4163')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    document.querySelector('#Time_sunrise').innerText = JSON.stringify(data.results.sunrise);
    //Line 53 on html file
})
.catch(error => console.error('Error fetching data:', error))

//Toronto's time for Sunset
fetch('https://api.sunrisesunset.io/json?lat=43.70011&lng=-79.4163')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    document.querySelector('#Time_sunset').innerText = JSON.stringify(data.results.sunset);
    //Line 60 on html file
})
.catch(error => console.error('Error fetching data:', error))

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
