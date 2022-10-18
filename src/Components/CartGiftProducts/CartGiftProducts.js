import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Typography,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";
import useCartTotal from "../../Hooks/useCartTotal";
import { selectGift, removeGift } from "../../store/reducers/reducer";
import styled from "@emotion/styled";
import "./CartGiftProducts.css";

const StyledCartGift = styled.div((props) => ({
    opacity: props.disabled ? 0.5 : null,
    webkitFilter: props.disabled ? "grayscale(1)" : null,
    filter: props.disabled ? "grayscale(1)" : null,
}));

const CartGiftProducts = () => {
    const dispatch = useDispatch();

    const {
        giftProducts,
        giftProducts: { selectedGift },
    } = useSelector((state) => state.reducer);

    const { totalAmount } = useCartTotal();

    useEffect(() => {
        // FIX THIS \/ \/ \/ \/
        if (selectedGift) {
            const currentSelectedGift = giftProducts.products.find(
                (el) => el.id == selectedGift
            );
            if (totalAmount < currentSelectedGift.requiredAmount) {
                dispatch(removeGift());
            }
        }
    }, [totalAmount]);

    const items = giftProducts.products.map((el) => {
        const disabled = totalAmount < el.requiredAmount;
        return (
            <StyledCartGift
                disabled={disabled}
                className="cart-gift__container"
                key={el.id}
            >
                <FormControlLabel
                    disabled={disabled}
                    value={el.id}
                    control={
                        <Radio
                            sx={{
                                color: "grey",
                                "&.Mui-checked": {
                                    color: "#ed6c02",
                                },
                            }}
                        />
                    }
                    sx={{ width: "42px", mr: 0 }}
                />
                <div className="cart-gift__content">
                    <div className="cart-gift__image-wrapper">
                        <img src={el.img} />
                    </div>
                    <div className="cart-gift__item-info">
                        <div className="cart-gift__item-name">{el.name}</div>
                        <div className="cart-gift__item-description">
                            {el.description}
                        </div>
                    </div>
                </div>
            </StyledCartGift>
        );
    });

    const handleChange = (event) => {
        dispatch(selectGift(event.target.value));
    };

    return (
        <div className="cart-gift">
            <Typography
                component="h3"
                sx={{
                    fontWeight: 600,
                    fontSize: 24,
                }}
            >
                Выберите подарок
            </Typography>
            <FormControl>
                <RadioGroup
                    value={giftProducts.selectedGift}
                    onChange={handleChange}
                    defaultChecked={giftProducts.selectedGift}
                >
                    {items}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default CartGiftProducts;
