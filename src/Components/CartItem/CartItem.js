import { useDispatch } from "react-redux";
import { Divider, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {
    addToCart,
    decrementItem,
    removeFromCart,
} from "../../store/reducers/reducer";
import CounterButtons from "../CounterButtons/CounterButtons";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const itemOptions = item.options?.map((el) => (
        <span key={el.name}>
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
    };

    const onDelete = () => {
        dispatch(decrementItem(item.id));
    };

    const onRemove = () => {
        dispatch(removeFromCart(item.id));
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
                    <IconButton sx={{ ml: "5px" }} onClick={onRemove}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </div>
            <Divider sx={{ mt: "4px" }} />
        </>
    );
};

export default CartItem;
