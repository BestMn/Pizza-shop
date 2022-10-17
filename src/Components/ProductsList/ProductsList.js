import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { Container, Typography, Grid } from "@mui/material";

const ProductsList = ({ item }) => {
    const [data, setData] = useState([]);

    const { products } = useSelector((state) => state.reducer);

    useEffect(() => {
        const itemsOfCategory = products.filter(
            (el) => el.categoryId === item.id
        );
        setData(itemsOfCategory);
    }, [products]);

    const productItems = data.map((el) => (
        <ProductItem item={el} key={el.id} />
    ));

    return (
        <Container maxWidth="lg" sx={{ my: "20px" }}>
            <Typography
                component="h2"
                sx={{
                    fontWeight: 600,
                    fontSize: 32,
                    scrollMarginTop: "64px",
                }}
                id={item.name}
            >
                {item.name}
            </Typography>
            <Grid container spacing={0}>
                {productItems}
            </Grid>
        </Container>
    );
};

export default ProductsList;
