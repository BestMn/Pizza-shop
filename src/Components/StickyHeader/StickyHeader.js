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
import "./StickyHeader.css";

const StickyHeader = () => {
    const { categories } = useSelector((state) => state.reducer);

    const { totalAmount } = useCartTotal();

    const scrollHandler = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    const items = categories.map((el) => (
        <Typography
            key={el.id}
            sx={{
                mr: "12px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                cursor: "pointer",
            }}
            component={"li"}
            onClick={() => scrollHandler(el.name)}
        >
            {el.name}
        </Typography>
    ));

    return (
        <AppBar sx={{ bgcolor: "black" }} position="sticky">
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mr: "20px",
                        }}
                        className="scticky-header__menu"
                        component={"ul"}
                    >
                        {items}
                    </Box>
                    <NavLink to="/cart">
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            disableElevation
                            sx={{
                                borderRadius: "20px",
                                minWidth: "120px",
                                dislpay: "flex",
                                justifyContent: "space-between",
                                fontWeight: "600",
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                divider={
                                    <Divider orientation="vertical" flexItem />
                                }
                            >
                                <ShoppingCartIcon />
                                <Typography
                                    sx={{
                                        whiteSpace: "nowrap",
                                        minWidth: "80px",
                                    }}
                                >
                                    {totalAmount} ₽
                                </Typography>
                            </Stack>
                        </Button>
                    </NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default StickyHeader;
