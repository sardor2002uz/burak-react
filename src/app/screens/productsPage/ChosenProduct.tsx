import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";

export default function ChosenProduct() {
  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>Product Detail</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            className="swiper-area"
          >
            {["/img/kebab-fresh.webp", "/img/kebab.webp"].map(
              (ele: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img className="slider-image" src={ele} alt="FR Kebab" />
                  </SwiperSlide>
                );
              },
            )}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>FR Kebab</strong>
            <Box className={"rating-box"}>
              <Rating
                name="product-rating"
                value={3}
                precision={0.5}
                size="small"
                readOnly
              />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon fontSize="small" />
                  <span>10 pc</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>This is Kebab with Fruits.</p>
            <Divider height="1" width="100%" bg="#b8b8b8" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span>$ 15</span>
            </div>
            <div className={"button-box"}>
              <Button variant="contained">ADD TO BASKET</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
