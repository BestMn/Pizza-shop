import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import "./ProductItem.css";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";
import CounterButtons from "../CounterButtons/CounterButtons";
import { addToCart, decrementItem } from "../../store/reducers/reducer";

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.reducer);

    const [modalOpen, setModalOpen] = useState(false);

    const itemInCart = cart.products.find((el) => item.id === el.id);

    const handleClose = () => {
        setModalOpen(false);
    };

    const addToCartHandler = () => {
        dispatch(
            addToCart({
                ...item,
                quantity: 1,
            })
        );
        handleClose();
    };

    const decrementItemHandler = () => {
        dispatch(decrementItem(item.id));
    };

    const buyButton = item.variants ? (
        <Button
            onClick={() => setModalOpen(true)}
            variant="contained"
            color="warning"
            size="large"
            disableElevation
            sx={{ borderRadius: "20px" }}
        >
            Выбрать
        </Button>
    ) : itemInCart ? (
        <CounterButtons
            onDelete={decrementItemHandler}
            onAdd={addToCartHandler}
            quantity={itemInCart.quantity}
        />
    ) : (
        <Button
            onClick={addToCartHandler}
            variant="contained"
            color="warning"
            size="large"
            disableElevation
            sx={{ borderRadius: "20px" }}
        >
            Купить
        </Button>
    );

    const displayedPrice = item.variants ? (
        <span>
            От{" "}
            {
                item.variants.reduce((prev, curr) =>
                    prev.price < curr.price ? prev : curr
                ).price
            }{" "}
            ₽
        </span>
    ) : (
        <span>{item.price} ₽</span>
    );

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="product__container">
                <div
                    className="product__info"
                    onClick={() => setModalOpen(true)}
                >
                    <div className="product__image">
                        <img src={item.img} />
                    </div>
                    <div className="product__name">{item.name}</div>
                    <div className="product__description-wrapper">
                        <div className="product__description">
                            {item.description}
                        </div>
                    </div>
                </div>
                <div className="product__buy-container">
                    <div className="product__buy-price">{displayedPrice}</div>
                    <div className="product__buy-buttons">
                        {buyButton}
                        <ProductDetailsModal
                            item={item}
                            modalOpen={modalOpen}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default ProductItem;
