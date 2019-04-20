class weather {
  constructor() {
    this.api_key = 'a2203debd5d07c7af279f3bf4307848e';
  }

  async getWeather(id) {
    const weatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=a2203debd5d07c7af279f3bf4307848e`
    );

    const weathers = await weatherResponse.json();

    return {
      weathers
    };
  }

  async getID() {
    const cityListResponse = await fetch('cities.json');

    const cities = await cityListResponse.json();

    return {
      cities
    };
  }
}
