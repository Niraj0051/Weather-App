import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({ info }) {
    const hotImage_URL = "https://images.unsplash.com/photo-1542213493895-edf5b94f5a96?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const coldImage_URL = "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rainImage_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const defaultImage_URL = "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zfGVufDB8fDB8fHww"
    return (
        <Card className="mt-6 bg-white rounded-xl shadow-2xl">
            <CardMedia
                className="h-48"
                image={
                    info.humidity > 85 && info.temp < 25 
                      ? rainImage_URL 
                      : info.temp > 30 
                      ? hotImage_URL 
                      : info.temp < 15 
                      ? coldImage_URL
                      : defaultImage_URL
                  }
                title="Weather Image"
            />
            <CardContent className="space-y-4">
                <Typography gutterBottom variant="h5" component="div" className="text-2xl font-bold text-gray-800">
                    {info.city} &nbsp;
                    {
                        info.humidity > 80 ? (
                            <ThunderstormIcon className="w-12 h-12 text-blue-500 animate-pulse" />
                        ) : info.temp > 15 ? (
                            <WbSunnyIcon className="w-12 h-12 text-yellow-500 animate-spin" />
                        ) : (
                            <AcUnitIcon className="w-12 h-12 text-gray-400 animate-spin" />
                        )
                    }
                </Typography>
                <Typography variant="body2" className="text-gray-600 space-y-2" component={"span"}>
                    <p><span className="font-semibold">Country:</span> {info.country}</p>
                    <p><span className="font-semibold">Humidity:</span> {info.humidity}</p>
                    <p><span className="font-semibold">Pressure:</span> {info.pressure}</p>
                    <p><span className="font-semibold">Temperature:</span> {info.temp}&deg;C</p>
                    <p>
                        <span className="font-semibold">Weather:</span>{" "}
                        <i>{info.weather}</i> and it feels like <i>{info.feels_like}&deg;C</i>
                    </p>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;