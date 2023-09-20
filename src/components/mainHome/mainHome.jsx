import React from "react";
import { imgsRestaurants } from "../imgs/imgs";
import { useNavigate } from "react-router-dom";

const MainHome = () => {
  const detailRest = useNavigate();
  function redirectDetailRest(e) {
    e.preventDefault();

    detailRest("/restaurant-details");
  }

  return (
    <div>
      <section
        className="flex-col relative w-[348px] h-[106px] top-[110px] left-4 cursor-pointer"
        onClick={redirectDetailRest}
      >
        {imgsRestaurants.map((img) => (
          <div className="relative bg-white flex mb-3 rounded-[10px]">
            <img
              key={img.id}
              src={img.url}
              alt={img.description}
              className="w-[134px] h-[108.02px] mb-2 left-[0.5px] top-1 relative "
            />
            <div>
              <h3 className="text-[14px] leading-[16.41px] tracking-[-0.3px] text-[#414141] top-1 relative left-1">
                {img.title}
              </h3>
              <img
                src={img.start}
                className=" w-[68px] h-3 relative top-2 left-1"
              />
              <p
                className="text-[14px]
              leading-[16.41px]
              tracking-[-0.3px]
              text-[#414141] relative top-4 left-1"
              >
                {img.schedule}
              </p>
              <p
                className="text-[10px]
              leading-[11.72px]
              tracking-[-0.3px] text-[#a7a7a7] relative top-5 left-1"
              >
                Before you{" "}
                <span className="cost text-[#414141] ml-[2.5px]">
                  {img.cost}
                </span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainHome;
