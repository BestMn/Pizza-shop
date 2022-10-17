import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Fade,
    Modal,
    FormControl,
    Button,
    Backdrop,
    Box,
    Typography,
    Grid,
} from "@mui/material";
import OptionsButtons from "../OptionsButtons/OptionsButtons";
import { addToCart, clearProductOption } from "../../store/reducers/reducer";
import "./ProductDetailsModal.css";

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 400,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
};

const ProductDetailsModal = ({ item, modalOpen, handleClose }) => {
    const dispatch = useDispatch();

    const { options, selectedOptions } = useSelector((state) => state.reducer);

    const [selectedVariant, setSelectedVariant] = useState(null);

    const addToCartHandler = () => {
        dispatch(
            addToCart({
                ...item,
                ...selectedVariant,
                options: selectedOptions,
                quantity: 1,
            })
        );
        handleClose();
    };

    useEffect(() => {
        if (selectedOptions && item.variants) {
            const variant = item.variants.find(
                (el) =>
                    el.options.includes(selectedOptions[0]?.value) &&
                    el.options.includes(selectedOptions[1]?.value)
            );
            setSelectedVariant(variant);
        }
    }, [selectedOptions]);

    const optionButtons = options.map((el) => {
        if (item.availableOptions.find((elem) => elem === el.id)) {
            return <OptionsButtons option={el} key={el.id} />;
        }
    });

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <div className="product-modal__image-container">
                            <img src={item.img} />
                        </div>
                        <div className="product-modal__info-container">
                            <div className="product-modal__name">
                                {item.name}
                            </div>
                            <div className="product-modal__description">
                                {item.description}
                            </div>
                            <div className="product-modal__options">
                                {optionButtons}
                            </div>
                            <div className="product-modal__buy-container">
                                <div className="product-modal__buy-price">
                                    {selectedVariant
                                        ? selectedVariant.price
                                        : item.price}{" "}
                                    ₽
                                </div>
                                <div className="product-modal__buy-buttons">
                                    <Button
                                        onClick={addToCartHandler}
                                        variant="contained"
                                        color="warning"
                                        size="large"
                                        disableElevation
                                        sx={{ borderRadius: "20px" }}
                                    >
                                        В корзину
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ProductDetailsModal;
