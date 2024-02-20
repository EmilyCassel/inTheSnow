let searchCityInput = $("#searchCityInput");
let currentSearchButton = $("#searchCityCurrentButton")

console.log(searchCityInput)



//api key
var apiKey = "37bf353955a508646802b09cebccd497";

//function to save searched locations to local storage 
function saveSearchedCityToLocalStorage() {
    if (typeof (storage) !== "undefined") {
        let citySearchHistory = JSON.parse(localStorage, getItem("citySearchHistory")) || [];

        citySearchHistory.push(locationSearch);

        localStorage.setItem("citySearchHistory"), JSON.parse(localStorage.getItem(citySearchHistory));
    }
};





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
            console.log("Weather Data:", weatherData);
            changeCityBasics(weatherData, cityName);
        });


    $.get(forecastURL)
        .then(function (forecastData) {
            console.log("Forecast Data:", forecastData)
            showCityForecast(forecastData)
        });


}

function showCityForecast(forecastData) {
    //$() jquery get document by anything
    let forecastDataContainer = $("#currentCityForecast")

    let blocks = forecastData.list

    for (var i = 0; i < blocks.length; i++) {
        var blockObject = blocks[i];

        if (blockObject.dt_txt.includes("12:00")) {

            forecastDataContainer.append(`
            <div>
            ${blockObject.main.temp}
            ${blockObject.wind.speed}
            ${blockObject.main.humidity}
            </div>
            `) // this is and html template that will get repeated 5 times
        }
    }


    


};




function showPastSearchedCities() {
    let pastSearchedCity = getPastSearchedCityFromLocalStorage();

    let pastSearchedCitiesList = document.querySelector("#pastCitiesSearchedContainer");

    pastSearchedCitiesList.innerHTML = "";

    if (!pastSearchedCity.length) {
        pastSearchedCity.innerHTML = "<p>No Past Searched Cities</p>";
    }

    pastSearchedCity.forEach(function () {

    })
}


$(document).ready(function () {

    let searchCityButton = $("#searchCityButton")
    //    when we click button, whatever is in input box will console.logged

    searchCityButton.on("click", function () {

        getCurrentSearchCity(searchCityInput.val());

    });








    //let searchPastButton = searchPastButton
    //searchPastButton.addEventListener("click", function(){})


});




























//date & time
const rightNow = dayjs();
let formattedDate = rightNow.format("dddd MMMM DD, YYYY")
$('#currentDay').text(formattedDate);
let formattedTime = rightNow.format("h:mm A");
$("#currentTime").text(formattedTime);















function getPastSearchedCityFromLocalStorage() {

}




















/*
function searchCityInput(){
    return $("#searchCityInput")
}


function searchCurrentForecast(){
    cityName = searchCityInput.val();

}
//buttons
$("#searchCityButton").click(searchCurrentForecast, searchCurrentWeather)

let searchCityButton = $("#searchCityButton");
let pastCitiesSearchButton = $("pastCitiesButton");





let cityName = (``)


function searchCurrentForecast(){
    searchCityInput

    let pastSearchesHistory = getPastSearches();
}

function searchCurrentWeather(){
    searchCityInput
}


function saveSearchedCityToLocalStorage(){
    if
}


searchCityInput.on("keydown", function(){
    if()
})

















//past search
function getPastSearchedCities(){
    let rawData = localStorage.getItem("citySearchedHistory");
    let pastSearchesHistory = JSON.parse(rawData) || [];
   
    return pastSearchesHistory;
}































   



function currentSearchWeatherConditions(){
    let currentCitySearchedContainer 
}

function searchCurrentCityInput(){
    let currentSearch = document.getElementById("searchCityInput"). value;  
}



function currentSearchFutureConditions(){

}








function citySearchedLocalStorage(city){
    let citiesSearched = JSON.parse(localStorage.getItem("citiesSearched")) || []; 

    citiesSearched.push(city)

    localStorage.setItem("citiesSearched", JSON.stringify(citiesSearched));
}






function pullSearchedCitiesFromLocalStorage(){
    return JSON.parse(localStorage.getItem("citiesSearched")) || [];
}


function showPastSearchedCities(){
    let citiesSearched = pullSearchedCitiesFromLocalStorage(); 

    let pastCitiesSearchedContainer = $("pastCitiesSearchedContainer"); 

    pastCitiesSearchedContainer.empty(); 

    citiesSearched.forEach(city => {
        let pastCityButton = $("pastCityButton").addClass=("pastCityButton").text(city); 

        pastCitiesSearchedContainer.append(pastCityButton);
    })
}




document.addEventListener('DOMContentLoaded', function() {

    let pastCityButton = document.getElementsByClassName("pastCityButton"); 

    pastCityButton.addEventListener("click", showPastSearchedCities)


    let searchCityButton = document.getElementById("searchCityButton"); 

    searchCityButton .addEventListener("click", searchCurrentCityInput)
    

    
})












 
    function currentSearch(){
        let searchedCity = search.val(); 
        
        if(!history.includes(searchedCity)){
            //add the city to the history array 
            history.push(searchedCity);
            localStorage.setItem("searchHistory", JSON.stringify(history));
        }
    };

function accessSearchHistory(){
    let history = JSON.parse(localStorage.getItem("history")) || []; 

    let searchedCity = history.find(history => history.searchHistoryContainer === historyButton);

    if(history){
        if(searchedCity.textContent !== textContent){
            searchedCity.textContent = textContent;

            localStorage.setItem("history", JSON.stringify(history))
        } else{
            let currentSearch = {history:searchHistoryContainer, textContent:textContent}; 

            history.push(currentSearch); 

            localStorage.setItem("history",JSON.stringify(history))
        }

    }
    console.log("localStorage")
    return history;
}



function pastCitySearches(){
    let history = JSON.parse(localStorage.getItem)

    let 


}




















searchButton.click(showCurrentForcast); 

$(".history").on("click", "button", function(){});





        var blocks = data.list; 

        for(var i = 0; i < blocks.length; i++){
            var blockObject = blocks [i];

            if(blockObject.dt_txt.includes("12:00")){
            }
        }




$(document).ready(function(){

    let historyButton = $(".historyButton");

    historyButton.on("click", function(){
        showCurrentForcast();
    })

    $(".historyButton").on("click", "button", function(){

    })

    let pastSearchButton = $(".searchHistory"); 

    pastSearchButton.on("click", function(){
        searchedCity();
    })
    
    $(".pastSearchHistory").on("click", "button", function(){})

    let history = accessSearchHistory(); 

})






$.get(url)
    .then(function(data){
        var blocks = data.list; 
        for(var = 0; i < blocks.length; i++){
            let blockObject === blocks[1]; 
            //only noontime blocks
            if (blockObject.dt_text.includes("12:00")){
                //output an element for each block into the DOM window
            }
        }
    });












function showCurrentForcast() {
    let searchedCity = search.val().trim();
    let history = accessSearchHistory();

    if (searchedCity){


        $.get(currentWeatherURL)
            .then(function (currentWeatherData) {
                console.log("Current weather data", currentWeatherData)
                outputCurrentWeather(currentWeatherData)
            }).fail(function(error){
                console.log("error")
            })
        $.get(forcastURL)
            .then(function (forcastData) {
                console.log("forcastData:", forcastData);

            }).fail(function(error){
                console.log("errororos")
            });

    } else{ console.log("Please enter a valid city name")}

searchHistory(citySearched);
*/













