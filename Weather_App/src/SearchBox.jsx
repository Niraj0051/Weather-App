import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function SearchBox({ updateInfo , error}) {
    const [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fa22eafd8e1eae317cd82142da98be8e";

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResp = await response.json();
            console.log(jsonResp);

            let weatherInfo = {
                city: city,
                country: jsonResp.sys.country,
                humidity: jsonResp.main.humidity,
                pressure: jsonResp.main.pressure,
                temp: jsonResp.main.temp,
                temp_max: jsonResp.main.temp_max,
                temp_min: jsonResp.main.temp_min,
                feels_like: jsonResp.main.feels_like,
                sea_level: jsonResp.main.sea_level,
                weather: jsonResp.weather[0].description,
            };

            console.log(weatherInfo);
            return weatherInfo;
        } 
        catch {
            throw error
        }   
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            error(false)
            setCity("");
            let newInfo = await getWeather();
            updateInfo(newInfo);
        }
        catch {
            error(true)
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Search for the Weather
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <TextField
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    label="Search City"
                    variant="outlined"
                    required
                    className="w-full"
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SearchIcon />}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 shadow-lg"
                >
                    Search
                </Button>
            </form>
        </div>
    );
}

export default SearchBox;