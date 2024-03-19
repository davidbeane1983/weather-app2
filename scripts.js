//    3/5api.openweathermap.org/data/2.5/forecast?lat={40.7128}&lon={74.0060}&appid={0ee3713d06e3262bab7f50251486a437}
//https://api.openweathermap.org/data/3.0/onecall?lat={40.7128}&lon={74.0060}&exclude={part}&appid={0ee3713d06e3262bab7f50251486a437}

lat = document.getElementById("lat");
lon = document.getElementById("lon");
submit = document.getElementById("submit")
temp = document.getElementById("temp")
humidity = document.getElementById("humidity")

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=74.0060&lon=74.0060&units=imperial&appid=7351e4f5c9c7dedb976d6155a0456b38",
  {
    //method: "GET", //GET is the default.
    //credentials: "same-origin", // include, *same-origin, omit
    //redirect: "follow", // manual, *follow, error
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    temp.value = data.list[0].main.temp
    humidity.value = data.list[0].main.humidity
   
    console.log(data);
  });

  