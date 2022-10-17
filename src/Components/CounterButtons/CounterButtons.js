import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CounterButtons.css";

const CounterButtons = ({ onDelete, onAdd, quantity }) => {
    return (
        <div className="cart-item__total-buttons">
            <IconButton
                aria-label="delete"
                sx={{ p: "3px" }}
                onClick={onDelete}
            >
                <RemoveIcon />
            </IconButton>
            <div>{quantity}</div>
            <IconButton aria-label="add" sx={{ p: "3px" }} onClick={onAdd}>
                <AddIcon />
            </IconButton>
        </div>
    );
};

export default CounterButtons;
