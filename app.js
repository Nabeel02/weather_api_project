const weathers = new weather();
const ui = new UI();

const btn = document.getElementById('mainButton');
const btnFind = document.getElementById('find');
const fetchCity = document.getElementById('cityId');

btn.addEventListener('click', function() {
  const cityId = document.getElementById('cityId');
  let output = '';
  weathers.getID().then(response => {
    response.cities.forEach(res => {
      output += `<option value="${res.id}">${res.name}</option>`;
    });
    cityId.innerHTML = output;
  });
});

btnFind.addEventListener('click', function() {
  console.log(fetchCity.value);
  weathers.getWeather(fetchCity.value).then(response => {
    ui.fetchCurrentWeather(response.weathers.city, response.weathers.list);
    ui.fetchListOfWeather(response.weathers.list);
  });
});
