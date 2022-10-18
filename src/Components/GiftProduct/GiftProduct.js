import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import useCartTotal from "../../Hooks/useCartTotal";
import styled from "@emotion/styled";
import "./GiftProduct.css";

const StyledDiv = styled.div((props) => ({
    outline: props.selected ? "3px solid #ed6c02" : null,
}));

const GiftProduct = ({ item, onSelectHandler }) => {
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
                        <span className="gift-product__price-new">
                            Бесплатно
                        </span>
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
                            color="warning"
                            size="large"
                            disableElevation
                            sx={{ borderRadius: "20px", width: "100%" }}
                        >
                            Выбрать
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            color="warning"
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
