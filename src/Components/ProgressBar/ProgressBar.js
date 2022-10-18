import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
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
            <div
                className="progress-bar__point"
                style={{ left: `${position}%` }}
                key={el}
            >
                <div className="progress-bar__point-text">{el} ₽</div>
            </div>
        );
    });

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="progress-bar">
            <Container
                maxWidth="lg"
                sx={{ height: "100%", display: "flex", position: "relative" }}
            >
                <div
                    onClick={() => setModalOpen(true)}
                    className="progress-bar__content"
                >
                    Выберите подарок
                </div>
                <div className="progress-bar__points-container">
                    <div
                        className="progress-bar__points-bar"
                        style={{ width: `${barWidth}%` }}
                    ></div>
                    {points}
                </div>
            </Container>
            <ProductGiftModal
                items={giftProducts}
                handleClose={handleClose}
                modalOpen={modalOpen}
            />
        </div>
    );
};
export default ProgressBar;
