import React from "react";

import "./cardPromo.scss";
import { AspectRatio, Box, Card, Typography } from "@mui/joy";

export const PromoCard = ({ image = "", id }) => {
  return (
    <>
      <AspectRatio ratio="3" sx={{ minWidth: 3 }}>
        <img
          key={image.id}
          className="img-promo"
          srcSet={`${image}?h=120&fit=crop&auto=format&dpr=2&w=72 2x`}
          src={`${image}?h=120&fit=crop&auto=format&w=72 `}
          alt={id}
        />
      </AspectRatio>
    </>
  );
};
