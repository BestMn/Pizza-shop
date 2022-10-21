import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import ProductGiftModal from "../ProductGiftModal/ProductGiftModal";
import useCartTotal from "../../Hooks/useCartTotal";
import "./ProgressBar.css";

const ProgressBar = () => {
    const { giftProducts } = useSelector((state) => state.reducer);

    const [modalOpen, setModalOpen] = useState(false);

    const { totalAmount } = useCartTotal();

    const maxPoint = Math.max(...giftProducts.points);
    const barWidth = (totalAmount / maxPoint) * 100;

    const points = giftProducts.points.map((el) => {
        const position = (el / maxPoint) * 100;
        return (
            <Box
                className="progress-bar__point"
                sx={{ left: `${position}%` }}
                key={el}
            >
                <Box className="progress-bar__point-text">{el} ₽</Box>
            </Box>
        );
    });

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <Box className="progress-bar">
            <Container
                maxWidth="lg"
                sx={{ height: "100%", display: "flex", position: "relative" }}
            >
                <Box
                    sx={{ "&::after": { backgroundColor: "primary.main" } }}
                    onClick={() => setModalOpen(true)}
                    className="progress-bar__content"
                >
                    Выберите подарок
                </Box>
                <Box className="progress-bar__points-container">
                    <Box
                        className="progress-bar__points-bar"
                        sx={{
                            width: `${barWidth}%`,
                            backgroundColor: "primary.main",
                        }}
                    ></Box>
                    {points}
                </Box>
            </Container>
            <ProductGiftModal
                items={giftProducts}
                handleClose={handleClose}
                modalOpen={modalOpen}
            />
        </Box>
    );
};
export default ProgressBar;
