import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function Weather() {
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(false);

    let updateWeather = (result) => {
        setWeather(result);
    };
    let updateError = (result) => {
        setError(result);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1738996674608-3d2d9d8450a0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <div className="bg-white opacity-75 p-8 rounded-xl shadow-2xl w-full max-w-md">
                <SearchBox updateInfo={updateWeather} error={updateError} />
                {/* Transition for InfoBox */}
                <div
                    className={`transition-all duration-500 ease-in-out transform ${
                        weather.city ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                    {weather.city && !error ? <InfoBox info={weather} /> : null}
                </div>
                {/* Error message (independent of InfoBox transition) */}
                {error && (
                    <p className="text-xl font-bold text-red-600 mt-5 text-center">
                        Sorry! City you searched is not Found !!
                    </p>
                )}
            </div>
        </div>
    );
}

export default Weather;