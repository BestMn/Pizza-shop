import { useDispatch } from "react-redux";
import { IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    clearProductOption,
    addToCart,
    decrementItem,
} from "../../store/reducers/reducer";
import CounterButtons from "../CounterButtons/CounterButtons";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const itemOptions = item.options?.map((el) => (
        <span>
            {el.name}: {el.value}
        </span>
    ));

    const onAdd = () => {
        dispatch(
            addToCart({
                ...item,
                quantity: 1,
            })
        );
        dispatch(clearProductOption());
    };

    const onDelete = () => {
        dispatch(decrementItem(item.id));
    };

    return (
        <>
            <div className="cart-item__container">
                <div className="cart-item__content">
                    <div className="cart-item__image-wrapper">
                        <img src={item.img} />
                    </div>
                    <div className="cart-item__item-info">
                        <div className="cart-item__item-name">{item.name}</div>
                        <div className="cart-item__item-options">
                            {itemOptions}
                        </div>
                    </div>
                </div>
                <div className="cart-item__item-total">
                    <CounterButtons
                        onAdd={onAdd}
                        onDelete={onDelete}
                        quantity={item.quantity}
                    />
                    <div className="cart-item__total-amount">
                        {item.quantity * item.price} ₽
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default CartItem;
