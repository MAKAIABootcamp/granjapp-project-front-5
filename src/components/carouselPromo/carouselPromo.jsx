// import React from "react";
// import { useSelector } from "react-redux";
// import { PromoCard } from "./PromoCard";
// import "./cardPromo.scss";
// import { AspectRatio, Box, Card, Typography } from "@mui/joy";

// export const CarouselPromo = () => {
//   const { promos } = useSelector((state) => state.granjApp);

//   return (
//     <div>
//       {promos.map((item) => (
//         <Card
//           orientation="horizontal"
//           size="sm"
//           // key={item.title}
//           variant="outlined"
//         >
//           <AspectRatio minHeight={120} maxHeight={200}>
//             <img
//               srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.image}?h=120&fit=crop&auto=format`}
//               alt={item.title}
//             />
//           </AspectRatio>
//           <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
//             <Typography level="title-md">{item.title}</Typography>
//             <Typography level="body-sm">{item.description}</Typography>
//           </Box>
//         </Card>
//       ))}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { getDiscounts } from "../../firebase/discounts";

const CarouselPromo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const getDiscount = async () => {
      const promos = await getDiscounts();
      setPromos(promos);
    };
    getDiscount();
  }, []);
  return (
    <div
      id="animation-carousel"
      className="relative w-full z-[-100]"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="duration-200 ease-linear flex" data-carousel-item>
          {promos.map((promo) => (
            <img key={promo.id} src={promo.image} className="w-full h-full" />
          ))}
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselPromo;
