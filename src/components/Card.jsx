import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  // Weather API
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Función para cambiar de Fahrenheit a Celsius
  const changeTemp = () => {
    setIsCelsius(!isCelsius);
  };

  const celsius = parseFloat(weather.main?.temp - 273.15).toFixed(1) + " °C";
  const fahrenheit =
    parseFloat(((weather.main?.temp - 273.15) * 9) / 5 + 32).toFixed(1) + " °F";

  const [isCelsius, setIsCelsius] = useState(celsius);

  // Temperaturas mínimas y máximas
  const celsiusMin =
    parseFloat(weather.main?.temp_min - 273.15).toFixed(1) + " °C";
  const celsiusMax =
    parseFloat(weather.main?.temp_max - 273.15).toFixed(1) + " °C";

  const fahrenheitMin =
    parseFloat(((weather.main?.temp_min - 273.15) * 9) / 5 + 32).toFixed(1) +
    " °F";
  const fahrenheitMax =
    parseFloat(((weather.main?.temp_max - 273.15) * 9) / 5 + 32).toFixed(1) +
    " °F";

  // Sensació térmica de Fahrenheit a Celsius
  const feelsLikeCelsius =
    parseFloat(weather.main?.feels_like - 273.15).toFixed(1) + " °C";
  const feelsLikeFahrenheit =
    parseFloat(((weather.main?.feels_like - 273.15) * 9) / 5 + 32).toFixed(1) +
    " °F";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);

    function success(pos) {
      const crd = pos.coords;
      const apiKey = "180892f67f6f8f71fe4e55fe48aa1a08";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`
        )
        .then((res) => {
          setWeather(res.data);
          setIsLoading(false);
        });
    }
  }, []);
  console.log(weather);
  
    if (weather.weather?.[0].icon === "01d") {
        document.body.style = `background-image: url('https://ntelemicro.com/wp-content/uploads/2022/01/Mayormente-soleado.jpeg')`;
      } else if (weather.weather?.[0].icon === "01n") {
        document.body.style = `background-image: url('https://cdna.artstation.com/p/assets/images/images/014/370/720/large/vitaly-amaresestessi-clear-sky-night.jpg?1543693536')`;
      } else if (weather.weather?.[0].icon === "02d") {
        document.body.style = `background-image: url('https://p4.wallpaperbetter.com/wallpaper/980/878/553/few-clouds-sky-wallpaper-preview.jpg')`;
      } else if (weather.weather?.[0].icon === "02n") {
        document.body.style = `background-image: url('https://img.freepik.com/fotos-premium/fondos-cielo-nocturno-estrellas-luna-nubes_93200-2523.jpg')`;
      } else if (weather.weather?.[0].icon === "03d") {
        document.body.style = `background-image: url('https://ntelemicro.com/wp-content/uploads/2020/09/nubes.jpeg')`;
      } else if (weather.weather?.[0].icon === "03n") {
        document.body.style = `background-image: url(' https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cielo_nocturno_con_nubes.jpg/400px-Cielo_nocturno_con_nubes.jpg')`;
      } else if (weather.weather?.[0].icon === "04d") {
        document.body.style = `background-image: url('https://thumbs.gfycat.com/AnchoredEcstaticAtlanticspadefish-size_restricted.gif')`;
      } else if (weather.weather?.[0].icon === "04n") {
        document.body.style = `background-image: url('https://media.istockphoto.com/photos/mystical-midnight-sky-with-stars-surrounded-by-dramatic-clouds-dark-picture-id1133588496?b=1&k=20&m=1133588496&s=170667a&w=0&h=7hobIbmFRWeLvn_M4VqO_RGh4vM5NBSAIzFsUnRE-lc=')`;
      } else if (weather.weather?.[0].icon === "09d") {
        document.body.style = `background-image: url('https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/rain-drops-on-window-1827098_1920.jpg?w=900')`;
      } else if (weather.weather?.[0].icon === "09n") {
        document.body.style = `background-image: url('https://landscapingthesacred.files.wordpress.com/2016/07/image.jpeg')`;
      } else if (weather.weather?.[0].icon === "10d") {
        document.body.style = `background-image: url('https://cdn.11noticias.com/imagen_nota/thumb/lluvias-2_5.webp')`;
      } else if (weather.weather?.[0].icon === "10n") {
        document.body.style = `background-image: url('https://1.bp.blogspot.com/-w4b_py-wGg4/WRDvEJAqmeI/AAAAAAAAGCY/elMzCNuH6fAsFYQ0b7zMv7QYHTgiMDmvwCLcB/s1600/Lluvia%2Ben%2Bla%2Bnoche.JPG')`;
      } else if (weather.weather?.[0].icon === "11d") {
        document.body.style = `background-image: url('https://t1.ev.ltmcdn.com/es/posts/8/3/6/los_rayos_y_truenos_son_peligrosos_1638_600.jpg')`;
      } else if (weather.weather?.[0].icon === "11n") {
        document.body.style = `background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/1e/Cloud_to_cloud_lightning_strike.jpg')`;
      } else if (weather.weather?.[0].icon === "13d") {
        document.body.style = `background-image: url('https://w0.peakpx.com/wallpaper/667/560/HD-wallpaper-cold-snow-day-forest-soft-trees-weather-winter-cold-snowing-snow-blue.jpg')`;
      } else if (weather.weather?.[0].icon === "13n") {
        document.body.style = `background-image: url('https://st.depositphotos.com/1048902/1373/i/450/depositphotos_13739525-stock-photo-flying-snow.jpg')`;
      } else if (weather.weather?.[0].icon === "50d") {
        document.body.style = `background-image: url('https://static.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040')`;
      } else if (weather.weather?.[0].icon === "50n") {
        document.body.style = `background-image: url('https://i.pinimg.com/736x/3f/c4/c1/3fc4c193753ac3aff9f25c1a049379d0.jpg')`;
      }
    
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";

  return isLoading ? (
    <span className="loader"></span>
  ) : (
    <div className="card-container">
      <h1>{weather.name} <i className="fa-solid fa-location-dot"></i></h1>
     <h2>{isCelsius ? celsius : fahrenheit}</h2>
      
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
          alt="icon"
        />
      <p className="sky-description">{weather.weather?.[0].description} </p>
      
      <div className="min-max">
      <p className="min-max-temp">  Min: <b>{isCelsius ? celsiusMin : fahrenheitMin}</b> <i className="fa-solid fa-temperature-arrow-down"></i></p> 
      <p className="min-max-temp">  Max: <b>{isCelsius ? celsiusMax : fahrenheitMax}</b> <i className="fa-solid fa-temperature-arrow-up"></i></p>
      </div>
      
      <div className="line"></div>
        
        <p className="feels-like">
          Feels like: <b>{isCelsius ? feelsLikeCelsius : feelsLikeFahrenheit} <i className="fa-solid fa-temperature-high"></i></b>
        </p>
        
        <div className="line"></div>
      
      <p>
        Humedity: <b>{weather.main?.humidity} % <i className="fa-solid fa-droplet"></i></b>
      </p>
      
      <div className="line"></div>
      <p>Wind speed: <b>{weather.wind?.speed} Km/Hr</b> <i className="fa-solid fa-wind"></i></p>
      <div className="line"></div>
      <button onClick={changeTemp}>
        Change to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default Card;
