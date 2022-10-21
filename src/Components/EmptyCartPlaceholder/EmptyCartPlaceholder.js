import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./EmptyCartPlaceholder.css";

const EmptyCartPlaceholder = () => {
    return (
        <div className="empty-cart-placeholder__container">
            <span className="empty-cart-placeholder__title">
                Ваша корзина пуста
            </span>
            <img
                src="https://demo.foodninja.pro/static/media/empty-cart.d745a220.svg"
                className="empty-cart-placeholder__img"
            />
            <span className="empty-cart-placeholder__description">
                Добавьте сюда что-нибудь
            </span>
            <NavLink to={"/"}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation
                    sx={{ borderRadius: "20px", mt: "15px" }}
                >
                    В меню
                </Button>
            </NavLink>
        </div>
    );
};

export default EmptyCartPlaceholder;
