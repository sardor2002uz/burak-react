import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";

type BasketItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Basket() {
  const history = useHistory();
  const [items, setItems] = React.useState<BasketItem[]>([
    { id: "kebab", name: "Kebab", image: "/img/kebab-fresh.webp", price: 15, quantity: 1 },
    { id: "fresh", name: "Fresh salad", image: "/img/fresh.webp", price: 10, quantity: 1 },
  ]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClose = () => setAnchorEl(null);
  const updateQuantity = (id: string, change: number) => {
    setItems((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  };
  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };
  const handleOrder = () => {
    handleClose();
    history.push("/orders");
  };

  return (
    <Box className="hover-line">
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Badge badgeContent={items.length} color="secondary">
          <img src="/icons/shopping-cart.svg" alt="" />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{ className: "basket-menu-paper", elevation: 2 }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className="basket-frame">
          <Box className="all-check-box">
            <span>Basket</span>
            <span className="basket-count">{items.length} items</span>
          </Box>
          <Box className="orders-main-wrapper">
            <Box className="orders-wrapper">
              {items.length > 0 ? items.map((item) => (
                <Box className="basket-info-box" key={item.id}>
                  <img src={item.image} className="product-img" alt={item.name} />
                  <div className="basket-item-details">
                    <span className="product-name">{item.name}</span>
                    <span className="product-price">${item.price} each</span>
                    <div className="basket-quantity" aria-label={`${item.name} quantity`}>
                      <button aria-label={`Decrease ${item.name}`} onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name}`} onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="cancel-btn" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)}>
                    <CancelIcon />
                  </button>
                  <strong className="basket-line-total">${item.price * item.quantity}</strong>
                </Box>
              )) : <div className="basket-empty">Your basket is empty.</div>}
            </Box>
          </Box>
          <Box className="basket-order">
            <span className="price">Total <strong>${total}</strong></span>
            <Button
              startIcon={<ShoppingCartIcon />}
              variant="contained"
              onClick={handleOrder}
              disabled={!items.length}
            >
              Checkout
            </Button>
          </Box>
        </Stack>
      </Menu>
    </Box>
  );
}
