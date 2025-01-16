import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => {
    const [weatherData, setWeatherData] = useState<any[]>([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/weatherforecast"
                ); // Ensure this URL matches your backend
                if (response.status === 200) {
                    setWeatherData(response.data);
                }
            } catch (error) {
                console.error("Error fetching weather data", error);
            }
        };

        fetchWeather();
    }, []); // Add missing dependency array to avoid multiple fetches

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weatherData.length > 0 ? (
                <ul>
                    {weatherData.map((w: any, index) => (
                        <li key={index}>
                            {w.date}: {w.summary} ({w.temperatureC} °C)
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;