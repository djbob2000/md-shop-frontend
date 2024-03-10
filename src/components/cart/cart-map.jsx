"use client";

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const CartMap = ({ address, onAddressChange }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [center, setCenter] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (address) {
      geocodeByAddress(address)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setCenter({ lat, lng });
          setMarkerPosition({ lat, lng });
        })
        .catch((error) => {
          console.error("Error setting new center: ", error);
        });
    }
  }, [address]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setCenter({ lat: userLat, lng: userLng });
          setMarkerPosition({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error("Error getting user location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleMapClick = async ({ latLng }) => {
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMarkerPosition({ lat, lng });

    try {
      const results = await geocodeByAddress(`${lat}, ${lng}`);
      const newAddress = results[0].formatted_address;
      onAddressChange(newAddress);
    } catch (error) {
      console.error("Error getting address: ", error);
    }
  };

  const handleAddressChange = (event) => {
    geocodeByAddress(event.target.value)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setCenter({ lat, lng });
        setMarkerPosition({ lat, lng });
      })
      .catch((error) => {
        console.error("Error setting new center: ", error);
      });
  };
  const shopLocation = { lat: 49.22828232988716, lng: 28.427736484692332 };
  const shopInfo = "MD-Delivery";
  return isLoaded ? (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        zoom={6}
        center={center}
        onClick={handleMapClick}
      >
        {shopLocation && (
          <Marker
            position={shopLocation}
            onClick={() => setInfoWindowOpen(true)}
          >
            {infoWindowOpen && (
              <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
                <div>{shopInfo}</div>
              </InfoWindow>
            )}
          </Marker>
        )}
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default CartMap;
