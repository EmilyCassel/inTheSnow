let searchCityInput = $("#searchCityInput");
let currentSearchButton = $("#searchCityCurrentButton")

//api key
var apiKey = "37bf353955a508646802b09cebccd497";


function changeCityBasics(weatherData, cityName) {
    $("#cityName").text(cityName)
    $("#currentTemperature").text("Current Temperature: " + weatherData.main.temp + " °F")
    $("#currentWind").text("Wind Speed: " + weatherData.wind.speed + " mph");
    $("#currentHumidity").text("Humidity: " + weatherData.main.humidity + "%");
}


function getCurrentSearchCity(cityName) {
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    $.get(weatherURL)
    .then(function (weatherData) {
        changeCityBasics(weatherData, cityName);
        saveSearchedCityToLocalStorage(searchedCity);
        
    });


$.get(forecastURL)
    .then(function (forecastData) {
        showCityForecast(forecastData)
    })
    .catch((err) => {
        alert("Please check your spelling")
    });



}

function showCityForecast(forecastData) {

    //$() jquery get document by anything
     let forecastDataContainer = document.getElementById('currentCityForecast')

    forecastDataContainer.innerHTML = "";

    let blocks = forecastData.list
  
    for (var i = 0; i < blocks.length; i++) {
//this section here is for creating elements
        let section = document.createElement("section");
        let forecastDate = document.createElement("h5")
        let forecastImage = document.createElement("img")
        let forecastTemp = document.createElement("p")
        let forecastWind = document.createElement("p")
        let forecastHumidity = document.createElement("p")

//adding to elements 
        var blockObject = blocks[i];

        if (blockObject.dt_txt.includes("12:00")) {
            section.setAttribute('class', 'text-center col-2 m-2 p-0 border border-primary')
            forecastDate.textContent = blocks[i].dt_txt.split(' ')[0]
            forecastImage.setAttribute('src', 'http://openweathermap.org/img/w/' + blocks[i].weather[0].icon + '.png')
            forecastTemp.textContent= "Temp" + blocks[i].main.temp + " 'F"
            forecastWind.textContent =  'Wind: ' + blocks[i].wind.speed + ' mph'
            forecastHumidity.textContent = 'Humidity: ' + blocks[i].main.humidity + '%'
        };
        section.append(forecastDate, forecastImage, forecastTemp, forecastWind, forecastHumidity)
        forecastDataContainer.append(section)

    }
};




function showPastSearchedCities() {
    let citySearchHistory = JSON.parse(localStorage.getItem("citySearchHistory")) || [];

    if(citySearchHistory && typeof citySearchHistory === "object"){
        citySearchHistory = Object.values(citySearchHistory)
    }
    
    let pastSearchedCitiesListElement = document.querySelector("#pastCitiesSearchedContainer");

    pastSearchedCitiesListElement.innerHTML = "";

    if (!citySearchHistory.length) {
        pastSearchedCitiesListElement.innerHTML = "<p>No Past Searched Cities</p>";
    }
        let counter = 0
    citySearchHistory.forEach(cityName => {
        let cityNameElement = document.createElement("button")

        cityNameElement.addEventListener("click", function(){
            getCurrentSearchCity(cityName)
        }); 
        
        cityNameElement.textContent = cityName;
        
        pastSearchedCitiesListElement.append(cityNameElement)
    })
}

//function to save searched locations to local storage 
function saveSearchedCityToLocalStorage(searchedCity) {
        let citySearchHistory = JSON.parse(localStorage.getItem("citySearchHistory")) || [];
     
        if(!citySearchHistory.includes(searchedCity)){

            citySearchHistory.push(searchedCity);
      
            localStorage.setItem("citySearchHistory", JSON.stringify(citySearchHistory));
        }

};



$(document).ready(function () {
    
    let searchCityButton = $("#searchCityButton")
    
    showPastSearchedCities();
    //    when we click button, whatever is in input box will console.logged

    searchCityButton.on("click", function () {
        let searchedCity = searchCityInput.val()
        getCurrentSearchCity(searchedCity);
        
        showPastSearchedCities();
    });

    const rightNow = dayjs();
    let formattedDate = rightNow.format("dddd MMMM DD, YYYY")
    $('#currentDay').text(formattedDate);
    let formattedTime = rightNow.format("h:mm A");
    $("#currentTime").text(formattedTime);
});












