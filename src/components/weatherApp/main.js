import React, { useState, useEffect } from "react";
import weatherIconGeneric from "../../assets/w.png"; // Renamed for clarity
import winterImage from "../../assets/House.png"; // Renamed for clarity
// import mid from "../../assets/mid rain.png"; // Not used directly with dynamic icons
// import sunnyIconStatic from "../../assets/sunny.png"; // Will use dynamic icons from API

// We don't need useLocation for this component based on the current logic
// import { useLocation } from "react-router-dom";

export default function Main() {
  const [start, setStart] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [currentTimeInCity, setCurrentTimeInCity] = useState("");
  useEffect(() => {
    if (data && data.city && typeof data.city.timezone === "number") {
      const cityTimezoneOffsetSeconds = data.city.timezone;

      const updateCityTime = () => {
        const nowUtc = new Date();
        const localTimeInCity = new Date(
          nowUtc.getTime() + cityTimezoneOffsetSeconds * 1000
        );
        const hours = localTimeInCity.getUTCHours().toString().padStart(2, "0");
        const minutes = localTimeInCity
          .getUTCMinutes()
          .toString()
          .padStart(2, "0");
        setCurrentTimeInCity(`${hours}:${minutes}`);
      };
      updateCityTime();
      const interval = setInterval(updateCityTime, 60000);
      return () => clearInterval(interval);
    }
  }, [data]);
  const fetchWeatherData = async () => {
    if (!city) {
      alert("لطفاً نام شهر را وارد کنید!");
      return;
    }
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const apiKey = "7df1aca8368bb20e65549c8833c5ef4d";
      const geocodingResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );
      if (!geocodingResponse.ok) {
        throw new Error(
          `خطا در دریافت مختصات شهر! وضعیت: ${geocodingResponse.status}`
        );
      }
      const geocodingData = await geocodingResponse.json();

      if (geocodingData.length === 0) {
        throw new Error(`شهر "${city}" یافت نشد. لطفاً نام شهر را بررسی کنید.`);
      }

      const { lat, lon } = geocodingData[0];

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!weatherResponse.ok) {
        throw new Error(
          `خطا در دریافت اطلاعات آب و هوا! وضعیت: ${weatherResponse.status}`
        );
      }
      const data = await weatherResponse.json();
      setData(data);
      setWeatherData(data);
      console.log(data);
      setStart(true);
    } catch (e) {
      setError(e.message);
      setWeatherData(null);
      console.error("عدم موفقیت در دریافت اطلاعات آب و هوا:", e);
      alert(
        `عدم موفقیت در دریافت اطلاعات آب و هوا: ${e.message}. لطفاً نام شهر را بررسی کنید یا دوباره تلاش کنید.`
      );
      setStart(false);
    } finally {
      setLoading(false);
    }
  };
  const getFormattedDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString("fa-IR", { month: "long", day: "numeric" });
  };
  const getFormattedTime = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };
  if (
    weatherData &&
    weatherData.list &&
    weatherData.list[0] &&
    weatherData.list[0].weather &&
    weatherData.list[0].weather[0]
  ) {
    console.log(weatherData);
    console.log(weatherData.list[0].weather[0]);
  }
  return (
    <>
      {!start ? (
        <div className="container-weather text-white min-h-screen justify-around w-full flex flex-col items-center bg-gradient-to-b from-[#1D2547] via-[#463C91] to-[#8151AC] py-8">
          <div className="img w-full max-w-xs sm:max-w-sm md:max-w-md place-items-center">
            <img
              src={weatherIconGeneric}
              className="w-full h-auto"
              alt="Weather illustration"
            />
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold my-6 text-center">
            <span className="text-white font-extrabold">Sadegh's</span>{" "}
            <span className="text-yellow-500">Weather App</span>
          </h3>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="bg-white h-[55px] w-[280px] sm:w-[320px] text-lg outline-yellow-500 px-4 rounded-2xl text-black shadow-md placeholder-gray-500"
            placeholder="نام شهر را وارد کنید"
          />
          <button
            onClick={fetchWeatherData}
            disabled={loading}
            className="w-[200px] !rounded-[100px] h-[55px] mt-6 text-xl font-extrabold text-[#4C3C79] rounded-[30px] bg-amber-300 shadow-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
          >
            {loading ? "در حال بارگذاری..." : "دریافت اطلاعات"}
          </button>
          {error && !loading && (
            <p className="text-red-300 mt-4 text-center bg-red-800 bg-opacity-50 px-4 py-2 rounded-md">
              خطا: {error}
            </p>
          )}
        </div>
      ) : weatherData && weatherData.list && weatherData.city ? (
        <div className="min-h-screen text-white bg-gradient-to-b from-[#1D2547] via-[#463C91] to-[#8151AC] grid grid-cols-1 gap-y-4 content-start py-6 px-4">
          {/* بخش بالایی: نام شهر و اطلاعات کلی اولین رکورد پیش‌بینی */}
          <div className="text-center h-[250px] mb-2">
            <h1 className="text-4xl font-bold">{weatherData.city.name}</h1>
            {weatherData.list[0] && (
              <>
                <p className="text-xl mt-2">
                  {weatherData.list[0].weather[0].description}
                </p>
                <h3>{currentTimeInCity}</h3>
                <img
                  className="mx-auto h-[100px] w-[100px]"
                  src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                  alt={weatherData.list[0].weather[0].description}
                />
                <h2 className="text-5xl font-light my-1">
                  {Math.round(weatherData.list[0].main.temp)}°C
                </h2>
                <p className="text-md">
                  حداکثر: {Math.round(weatherData.list[0].main.temp_max)}°C /
                  حداقل: {Math.round(weatherData.list[0].main.temp_min)}°C
                </p>
              </>
            )}
          </div>
          <div className="bot place-items-center my-4">
            <img
              className="mt-2 max-h-48 sm:max-h-64 mx-auto"
              src={winterImage}
              alt="Decorative winter house"
            />
          </div>
          <div className="box bg-white/10 backdrop-blur-md h-fit px-3 py-4 rounded-2xl w-full max-w-md mx-auto shadow-lg">
            <div className="flex pb-2 justify-between items-center w-full border-b border-white/30 mb-3">
              <h5 className="text-lg font-semibold">پیش‌بینی ساعتی (امروز)</h5>
              {weatherData.list[0] && (
                <h5 className="text-sm">
                  {getFormattedDate(weatherData.list[0].dt)}
                </h5>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 text-center">
              {weatherData.list.slice(0, 4).map((forecastItem, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  <h6 className="text-lg font-medium mb-1">
                    {Math.round(forecastItem.main.temp)}°C
                  </h6>
                  <img
                    className="h-12 w-12 sm:h-14 sm:w-14 mb-1"
                    src={`http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`}
                    alt={forecastItem.weather[0].description}
                  />
                  <div className="time text-sm">
                    {getFormattedTime(forecastItem.dt)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setStart(false);
              setCity("");
              setWeatherData(null);
            }}
            className="w-[200px] h-[50px] mt-8 mx-auto block font-semibold text-white rounded-[30px] bg-amber-500 hover:bg-amber-600 transition-colors"
          >
            جستجوی شهر دیگر
          </button>
        </div>
      ) : (
        // حالت بارگذاری یا خطای خاص در نمایش داده (اگر weatherData ساختار مورد انتظار را ندارد)
        <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#1D2547] via-[#463C91] to-[#8151AC]">
          {loading && (
            <p className="text-2xl">در حال بارگذاری اطلاعات آب و هوا...</p>
          )}
          {error && <p className="text-xl text-red-300">خطا: {error}</p>}
          {!loading && !error && (
            <p className="text-xl">اطلاعاتی برای نمایش وجود ندارد.</p>
          )}
          <button
            onClick={() => {
              setStart(false);
              setCity("");
              setWeatherData(null);
            }}
            className="w-[200px] h-[50px] mt-8 mx-auto block font-semibold text-white rounded-[30px] bg-amber-500 hover:bg-amber-600 transition-colors"
          >
            بازگشت
          </button>
        </div>
      )}
    </>
  );
}
