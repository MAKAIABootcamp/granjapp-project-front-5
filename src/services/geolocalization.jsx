// import React, { useState, useEffect } from "react";

// // Importamos el paquete react-geolocation
// import { useGeolocation } from "react-geolocation";

// const Geolocation = ({ onClick }) => {
//   const [geolocation, setGeolocation] = useState(null);
//   const [sector, setSector] = useState(null);

//   // Obtenemos la geolocalización actual del usuario
//   useEffect(() => {
//     // Obtenemos la geolocalización actual del usuario
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setGeolocation(position);
//       },
//       (error) => {
//         console.log(error);
//       },
//       {
//         enableHighAccuracy: true,
//       }
//     );
//   }, []);

//   // Obtenemos el nombre del sector
//   useGeolocation({
//     watchPosition: true,
//     interval: 10000,
//     maximumAge: 60000,
//   }).subscribe((position) => {
//     reverseGeocode(position.coords.latitude, position.coords.longitude)
//       .then((response) => {
//         setSector(response.results[0].address);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

//   return (
//     <div>
//       <button onClick={onClick}>Obtener geolocalización</button>
//       {geolocation && (
//         <p>
//           Latitud: {geolocation.coords.latitude}
//           Longitud: {geolocation.coords.longitude}
//           Sector: {sector}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Geolocation;
