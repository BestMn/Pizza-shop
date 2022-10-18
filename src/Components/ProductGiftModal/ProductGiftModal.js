import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import GiftProduct from "../GiftProduct/GiftProduct";
import useMediaQuery from "@mui/material/useMediaQuery";
import useCartTotal from "../../Hooks/useCartTotal";
import { useTheme } from "@mui/material/styles";
import { selectGift, removeGift } from "../../store/reducers/reducer";
import "./ProductGiftModal.css";

const ProductGiftModal = ({ items, modalOpen, handleClose }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const { totalAmount } = useCartTotal();

    const {
        giftProducts,
        giftProducts: { selectedGift },
    } = useSelector((state) => state.reducer);

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

    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const onSelectHandler = (item) => {
        dispatch(selectGift(item.id));
    };

    const giftItems = items.products.map((el) => (
        <GiftProduct item={el} key={el.id} onSelectHandler={onSelectHandler} />
    ));

    return (
        <div>
            <Dialog
                open={modalOpen}
                onClose={handleClose}
                fullScreen={fullScreen}
                fullWidth
                maxWidth="md"
            >
                <DialogContent>
                    <Typography
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: 32,
                            scrollMarginTop: "64px",
                        }}
                    >
                        Выберите подарок
                    </Typography>
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

                    <Grid container spacing={0}>
                        {giftItems}
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductGiftModal;
