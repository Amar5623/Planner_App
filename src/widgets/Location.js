import React, { useState, useEffect } from "react";

const LocationWidget = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);
  
  return (
    <div>
      <h1><center>Location</center></h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>
          Latitude: {latitude} <br />
          Longitude: {longitude}
        </p>
      )}
    </div>
  );
};

export default LocationWidget;