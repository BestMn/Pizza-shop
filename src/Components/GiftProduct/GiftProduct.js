import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import useCartTotal from "../../Hooks/useCartTotal";
import styled from "@emotion/styled";
import "./GiftProduct.css";

const StyledDiv = styled.div(({ selected, theme }) => ({
    outline: selected ? `3px solid ${theme.palette.primary.main}` : null,
}));

const GiftProduct = ({ item, onSelectHandler, theme }) => {
    const {
        giftProducts: { selectedGift },
    } = useSelector((state) => state.reducer);

    const { totalAmount } = useCartTotal();

    const selected = selectedGift == item.id;

    const available = totalAmount > item.requiredAmount;

    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <StyledDiv selected={selected} className="gift-product__container">
                <div className="gift-product__info">
                    <div className="gift-product__image">
                        <img src={item.img} />
                    </div>
                    <div className="gift-product__price">
                        <span className="gift-product__price-old">
                            {item.price} ₽
                        </span>
                        <Typography
                            component={"span"}
                            sx={{ color: "primary.main" }}
                            className="gift-product__price-new"
                        >
                            Бесплатно
                        </Typography>
                    </div>
                    <div className="gift-product__name">{item.name}</div>
                    <div className="gift-product__description-wrapper">
                        <div className="gift-product__description">
                            {item.description}
                        </div>
                    </div>
                </div>
                <div className="gift-product__buy-container">
                    {available ? (
                        <Button
                            onClick={() => onSelectHandler(item)}
                            variant="contained"
                            color="primary"
                            size="large"
                            disableElevation
                            sx={{ borderRadius: "20px", width: "100%" }}
                        >
                            Выбрать
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            disabled
                            sx={{ borderRadius: "20px", width: "100%" }}
                        >
                            Не хватает {item.requiredAmount - totalAmount} ₽
                        </Button>
                    )}
                </div>
            </StyledDiv>
        </Grid>
    );
};

export default GiftProduct;
