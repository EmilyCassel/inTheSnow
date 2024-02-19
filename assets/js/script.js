let search = $("#search");
let searchButton = $("#searchButton");
let pastSearchButton = $("pastSearchButton");


var apiKey = "37bf353955a508646802b09cebccd497";
var url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}$units=imperial`;
var forcastURL = `https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`;

const rightNow = dayjs();
let formattedDate = rightNow.format("dddd, MMMM DD, YYYY")
$('#currentDay').text(formattedDate);
let formattedTime = rightNow.format("h:mm A");
$("#currentTime").text(formattedTime);


$.get(url)
    .then(function (data) {
        console.log("Current weather data", data)
    });
$.get(forcastURL)
    .then(function (data) {
        console.log("forcastData:", data);

    });

function seeCurrentForcast() {
    let searchedCity = search.val();
    let history = accessSearchHistory();

    if (!history.includes(searchedCity)) {
        //add the city to the history array 
        history.push(searchedCity);
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }
};

function accessSearchHistory() {
    let data = localStorage.getItem("searchHistory", JSON.stringify(history));
    let history = JSON.parse(data) || [];

    return history;
}


function output() {

};







$(document).ready(function () {

    let historyButton = $(".historyButton");

    historyButton.on("click", function () {
        seeCurrentForcast();
    })

    $(".historyButton").on("click", "button", function () {

    })
})




/*

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

*/













