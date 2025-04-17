var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
const apiKey = "f375319d9c85e7a03683958c9b0e9df6";

function converttToCel(value) {
  return (value - 273).toFixed(2);
}

async function GetWeather() {
  var weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
    )
  ).json();

  if (!cityInput.value || weatherResult.cod !== 200) {
    alert(
      " شهر موجود نیست یا اسم شهر اشتباه وارد شده است. لطفا شهرهای معروف مثل تهران یا لندن یا مثل این هارا وارد که در دیتا بیس موجود باشد."
    );
  } else {
    setInfo(weatherResult);
  }
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];

  cityOutput.innerHTML = `${cityName} : نام شهر `;
  descOutput.innerHTML = `${description} : توضیحات`;
  tempOutput.innerHTML = `دمای هوا : ${converttToCel(temp)}`;
  windOutput.innerHTML = `${wind} m/s  : سرعت باد`;
}

addInput.addEventListener("click", GetWeather);
