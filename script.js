const apiKey="9ecd16fff77fdda6d3d0806fb49526a9";

const cityInput=document.getElementById("cityInput");

const searchBtn=document.getElementById("searchBtn");

const cityName=document.getElementById("cityName");

const temperature=document.getElementById("temperature");

const description=document.getElementById("description");

const humidity=document.getElementById("humidity");

const wind=document.getElementById("wind");

const weatherIcon=document.getElementById("weatherIcon");

async function getWeather(){

const city=cityInput.value.trim();

if(city===""){

alert("Please enter a city name");

return;

}

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

cityName.innerHTML="Loading...";

temperature.innerHTML="";
description.innerHTML="";
humidity.innerHTML="";
wind.innerHTML="";
weatherIcon.style.display="none";

const response=await fetch(url);

if(!response.ok){

throw new Error("City not found");

}

const data=await response.json();

cityName.innerHTML=`${data.name}, ${data.sys.country}`;

temperature.innerHTML=`🌡 Temperature : ${data.main.temp} °C`;

description.innerHTML=`☁ ${data.weather[0].description}`;

humidity.innerHTML=`💧 ${data.main.humidity}%`;

wind.innerHTML=`🌬 ${data.wind.speed} m/s`;

weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

weatherIcon.style.display="block";

}

catch(error){

cityName.innerHTML="Error";

temperature.innerHTML=error.message;

description.innerHTML="";

humidity.innerHTML="";

wind.innerHTML="";

weatherIcon.style.display="none";

}

}

searchBtn.addEventListener("click",getWeather);

cityInput.addEventListener("keypress",function(event){

if(event.key==="Enter"){

getWeather();

}

});