import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    Container,
    Button,
    AppBar,
    Toolbar,
    Box,
    Typography,
    Stack,
    Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartTotal from "../../Hooks/useCartTotal";
import "./ProgressBar.css";

const ProgressBar = () => {
    const { giftProducts } = useSelector((state) => state.reducer);
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

    return (
        <div className="progress-bar">
            <Container
                maxWidth="lg"
                sx={{ height: "100%", display: "flex", position: "relative" }}
            >
                <div className="progress-bar__content">Выберите подарок</div>
                <div className="progress-bar__points-container">
                    <div
                        className="progress-bar__points-bar"
                        style={{ width: `${barWidth}%` }}
                    ></div>
                    {points}
                </div>
            </Container>
        </div>
    );
};
export default ProgressBar;
