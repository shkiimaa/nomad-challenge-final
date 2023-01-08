const API_KEY = 'a409ed029f4dc038db2d0acb5a5662e2';

function onGeoThen({ coords }) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    })
  );
}

function onGeCatch() {
  alert("Can't find you. No weater for you.");
}
navigator.geolocation.getCurrentPosition(onGeoThen, onGeCatch);
