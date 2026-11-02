import React, { useMemo, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Korean Spicy Soup", imagePath: "/img/cutlet.webp", category: "Dish", price: 15, views: 26 },
  { productName: "Vegetarian Soup", imagePath: "/img/fresh.webp", category: "Dish", price: 15, views: 32 },
  { productName: "Salmon Pasta", imagePath: "/img/food-city.webp", category: "Dish", price: 18, views: 20 },
  { productName: "Kebab Rice", imagePath: "/img/kebab-fresh.webp", category: "Dish", price: 18, views: 18 },
  { productName: "Korean Spicy Soup", imagePath: "/img/cutlet.webp", category: "Dish", price: 15, views: 24 },
  { productName: "Vegetarian Soup", imagePath: "/img/fresh.webp", category: "Dish", price: 15, views: 15 },
  { productName: "Salmon Pasta", imagePath: "/img/food-city.webp", category: "Dish", price: 18, views: 21 },
  { productName: "Kebab Rice", imagePath: "/img/kebab-fresh.webp", category: "Dish", price: 18, views: 29 },
];

export default function Products() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Dish");
  const [sortBy, setSortBy] = useState("New");
  const categories = ["Other", "Dessert", "Drink", "Salad", "Dish"];
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesQuery = product.productName.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });

    if (sortBy === "Price") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortBy === "Views") return [...filtered].sort((a, b) => b.views - a.views);
    return filtered;
  }, [activeCategory, query, sortBy]);

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className={"top-text"}>
              <p>Burak Restaurant</p>
              <Stack className={"single-search-big-box"}>
                <input
                  type={"search"}
                  className={"single-search-input"}
                  name={"singleResearch"}
                  placeholder={"Type here"}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Button
                  className={"single-button-search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={sortBy === "New" ? "primary" : "secondary"}
                className={"order"}
                onClick={() => setSortBy("New")}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={sortBy === "Price" ? "primary" : "secondary"}
                className={"order"}
                onClick={() => setSortBy("Price")}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={sortBy === "Views" ? "primary" : "secondary"}
                className={"order"}
                onClick={() => setSortBy("Views")}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="contained"
                    color={activeCategory === category ? "primary" : "secondary"}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {visibleProducts.length !== 0 ? (
                visibleProducts.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: true ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {product.price}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">No matching dishes found.</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} alt="Burak Gurme" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/seafood.webp"} alt="Burak Seafood" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/sweets.webp"} alt="Burak Sweets" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/doner.webp"} alt="Burak Doner" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?q=Downtown%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
