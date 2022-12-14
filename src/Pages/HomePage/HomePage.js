import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import ProductsList from "../../Components/ProductsList/ProductsList";
import Slider from "../../Components/Slider/Slider";
import StickyHeader from "../../Components/StickyHeader/StickyHeader";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const HomePage = () => {
    const { categories } = useSelector((state) => state.reducer);

    const productLists = categories.map((el) => (
        <ProductsList item={el} key={el.id} id={el.id} />
    ));

    return (
        <>
            <Header />
            <Slider />
            <StickyHeader />
            {productLists}
            <ProgressBar />
        </>
    );
};

export default HomePage;
