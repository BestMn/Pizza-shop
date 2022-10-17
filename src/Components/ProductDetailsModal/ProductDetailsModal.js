import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, DialogContent, Button, Box, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import OptionsButtons from "../OptionsButtons/OptionsButtons";
import { addToCart } from "../../store/reducers/reducer";
import "./ProductDetailsModal.css";

const ProductDetailsModal = ({ item, modalOpen, handleClose }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { options, selectedOptions } = useSelector((state) => state.reducer);

    const [selectedVariant, setSelectedVariant] = useState(null);

    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
            <Dialog
                open={modalOpen}
                onClose={handleClose}
                fullScreen={fullScreen}
            >
                <DialogContent sx={{ p: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div className="product-modal__image-container">
                            <IconButton
                                onClick={handleClose}
                                sx={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                }}
                            >
                                <ClearIcon
                                    sx={{
                                        fontSize: 32,
                                        color: "#000",
                                    }}
                                />
                            </IconButton>
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
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductDetailsModal;
