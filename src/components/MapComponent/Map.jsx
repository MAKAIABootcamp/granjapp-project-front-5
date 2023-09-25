import React, { useState, useRef } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete
} from "@react-google-maps/api";


const defaultLocation = { lat: 4.62433, lng: -74.06364 };

const libraries = ["places"];

function Map({ handleAddress }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDB2YHcEhbq2O_5wwSG2Q0UwkORdT12rMU",
    libraries: libraries,
  });

  // const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [markerPosition, setMarkerPosition] = useState(defaultLocation);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const addressRef = useRef();

  const handleSubmitAddress = (e) => {
    if (addressRef.current.value !== "") {
      handleAddress(addressRef.current.value);
    }
  };

  const handleMarkAdress = (e) => {
    
    if (addressRef.current.value !== "") {
      const geo = new google.maps.Geocoder();
      geo.geocode({ address: addressRef.current.value }).then(({results}) => {
        if (results.length > 0) {
          // Set the marker's position state variable.
          setMarkerPosition(results.pop().geometry.location);
        }
      });
    }
  };

  return (
    isLoaded && (
      <div className="absolute flex mx-auto left-0 w-full h-[400px] z-10">
        <GoogleMap
          center={markerPosition}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={markerPosition} />
          <Marker />
        </GoogleMap>

        <form className="absolute w-full z-auto">
          <div className="relative p-5 m-2 flex mx-auto items-center justify-center">
            <Autocomplete onPlaceChanged={handleMarkAdress} className="w-full flex justify-center max-w-full">
              <input
                type="search"
                onClick={handleMarkAdress}
                ref={addressRef}
                id="search"
                className=" p-4 pl-10 w-full text-md border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500   "
                placeholder="Ingrese direccion"
                required
              ></input>
            </Autocomplete>

            <button
              type="button"
              onClick={handleSubmitAddress}
              className=" right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-auto p-2 mx-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white"
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default Map;
