import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  const dishes = [
    { name: "Steak", image: "/img/cutlet.webp", price: 10 },
    { name: "Fried chicken", image: "/img/kebab-fresh.webp", price: 10 },
    { name: "Winner", image: "/img/kebab.webp", price: 20 },
  ];

  return (
    <TabPanel value={"2"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {dishes.map((dish) => {
                  return (
                    <Box key={dish.name} className={"orders-name-price"}>
                      <img
                        src={dish.image}
                        className={"order-dish-img"}
                        alt={dish.name}
                      />
                      <p className={"title-dish"}>{dish.name}</p>
                      <Box className={"price-box"}>
                        <p>${dish.price}</p>
                        <img src={"/icons/close.svg"} />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>${dish.price * 2}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>$80</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>$82</p>
                </Box>
                <p className={"data-compl"}>
                  {moment().format("DD/MM/YY")}
                </p>
                <Button variant="contained" className={"verify-button"}>
                  Verify to Fulfil
                </Button>
              </Box>
            </Box>
          );
        })}

      </Stack>
    </TabPanel>
  );
}
