class UI {
  fetchListOfWeather(givenData) {
    const target = document.getElementById('table-body');
    let output = '';
    let i = 0;
    givenData.forEach(data => {
      output += `<tr>
        <th scope="row">${i++}</th>
        <td>${data.dt_txt}</td>
        <td>${data.main.grnd_level}</td>
        <td>${data.main.humidity}</td>
        <td>${data.main.pressure}</td>
        <td>${data.main.sea_level}</td>
        <td>${data.main.temp} ${'&#8457;'}</td>
        <td><img class="img-fluid" src="http://openweathermap.org/img/w/${
          data.weather[0].icon
        }.png"/></td>
      </tr>`;
    });

    target.innerHTML = output;
  }

  fetchCurrentWeather(data, currentWeather) {
    const city = document.getElementById('city');
    const currentday = document.getElementById('currentDay');
    const degree = document.getElementById('degree');
    const country = document.getElementById('country');
    const lat = document.getElementById('lat');
    const lon = document.getElementById('long');
    let daysList = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    const d = new Date();
    const n = d.getDay();
    console.log(data);
    lat.innerText = data.coord.lat;
    lon.innerText = data.coord.lon;
    currentday.innerText = daysList[n];
    city.innerText = data.name;
    country.innerHTML = `(${data.country})`;
    const celsius = currentWeather[0].main.temp - 273.15;
    degree.innerHTML = Math.floor(celsius) + '&#8451;';
  }
}
