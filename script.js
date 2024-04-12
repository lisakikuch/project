
fetch('https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('.Up-to-date-weather').innerText = JSON.stringify(data);
        //Line 41 on html file
    })
    .catch(error => console.error('Error fetching data:', error))

