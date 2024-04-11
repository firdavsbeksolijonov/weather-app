const __searchInput = document.querySelector('#search-input');
const __searchBtn = document.querySelector('.search-btn');



async function getWeather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df06531ea49636085dad7074a9bf83af&units=metric`)
    let data = await response.json();
    getWeather(data);

    document.querySelector('.temp').innerHTML = data.main.temp;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;


}

__searchBtn.addEventListener('click', () => {
    getWeather(__searchInput.value)

} )

