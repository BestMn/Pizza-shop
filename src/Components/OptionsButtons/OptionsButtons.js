import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import "./OptionsButtons.css";
import { addProductOption } from "../../store/reducers/reducer";

const StyledButton = styled.button((props) => ({
    flex: "1 1",
    padding: "4px 16px",
    borderRadius: "16px !important",
    color: props.active ? "#000" : "#5C6370",
    fontWeight: "400",
    textTransform: "capitalize",
    background: props.active && "#fff",
    boxShadow: props.active && "0 6px 20px rgb(6 5 50 / 19%)",
}));

const buttonGroupStyles = {
    width: "100%",
    margin: "5px 0",
    backgroundColor: "#ccc",
    color: "#fff",
    borderRadius: "16px",
    padding: "3px",
    flexWrap: "nowrap",
};

const OptionsButtons = ({ option }) => {
    const dispatch = useDispatch();

    const [activeButton, setActiveButton] = useState(option.values[0]);

    const optionButtons = option.values.map((el) => (
        <StyledButton
            key={el}
            active={el == activeButton}
            onClick={() => {
                setActiveButton(el);
            }}
        >
            {el}
        </StyledButton>
    ));

    useEffect(() => {
        dispatch(
            addProductOption({
                id: option.id,
                name: option.name,
                value: activeButton,
            })
        );
    }, [activeButton]);

    return (
        <div className="option-buttons">
            <div className="option-buttons__name">{option.name}</div>
            <ToggleButtonGroup
                sx={buttonGroupStyles}
                className="option-buttons__container"
            >
                {optionButtons}
            </ToggleButtonGroup>
        </div>
    );
};
export default OptionsButtons;
