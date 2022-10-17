import { useSelector } from "react-redux";

const useCartTotal = () => {
    const { cart } = useSelector((state) => state.reducer);

    let totalQuantity = 0;

    let totalAmount = 0;

    cart.products.forEach((item) => {
        totalQuantity += item.quantity;
        totalAmount += item.price * item.quantity;
    });
    return { totalAmount, totalQuantity };
};

export default useCartTotal;
