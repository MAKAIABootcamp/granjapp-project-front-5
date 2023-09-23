import React from "react";
import { useSelector } from "react-redux";
import { PromoCard } from "./PromoCard";
import "./cardPromo.scss";
import { AspectRatio, Box, Card, Typography } from "@mui/joy";

export const CarouselPromo = () => {
  const { promos } = useSelector((state) => state.granjApp);

  return (
    <div>
      {promos.map((item) => (
        <Card
          orientation="horizontal"
          size="sm"
          // key={item.title}
          variant="outlined"
        >
          <AspectRatio minHeight={120} maxHeight={200}>
            <img
              srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </div>
  );
};
