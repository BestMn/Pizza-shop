import { useSelector } from "react-redux";
import { Container, Divider, Typography } from "@mui/material";
import EmptyCartPlaceholder from "../EmptyCartPlaceholder/EmptyCartPlaceholder";
import CartItem from "../CartItem/CartItem";
import CartGiftProducts from "../CartGiftProducts/CartGiftProducts";
import useCartTotal from "../../Hooks/useCartTotal";
import "./Cart.css";

const Cart = () => {
    const { cart } = useSelector((state) => state.reducer);

    const { totalAmount } = useCartTotal();

    const cartItems = cart.products.map((el) => (
        <CartItem item={el} key={el.id} />
    ));

    if (!cart.products || !cart.products.length) {
        return (
            <Container maxWidth="md" sx={{ my: "20px" }}>
                <Typography
                    component="h2"
                    sx={{
                        fontWeight: 600,
                        fontSize: 32,
                    }}
                >
                    Корзина
                </Typography>
                <Divider sx={{ my: "20px" }} />
                <EmptyCartPlaceholder />
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ my: "20px" }}>
            <Typography
                component="h2"
                sx={{
                    fontWeight: 600,
                    fontSize: 32,
                }}
            >
                Корзина
            </Typography>
            <Divider sx={{ my: "20px" }} />
            {cartItems}
            <CartGiftProducts />
            <Typography
                component={"div"}
                variant="h3"
                className="cart__total-amount-wrapper"
            >
                Итого:{" "}
                <Typography
                    component={"span"}
                    variant="h3"
                    sx={{ color: "primary.main" }}
                    className="cart__total-amount"
                >
                    {totalAmount} ₽
                </Typography>
            </Typography>
        </Container>
    );
};

export default Cart;
