import { createTheme } from "@mui/material/styles";
import {
    blue,
    red,
    green,
    yellow,
    grey,
    deepOrange,
} from "@mui/material/colors";

const defaultTheme = createTheme({
    typography: {
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: "inherit",
        fontWeight: "inherit",
        button: {
            textTransform: "none",
        },
        h3: {
            fontWeight: 600,
            fontSize: 24,
        },
    },
    palette: {
        primary: deepOrange,
    },
});

export default defaultTheme;
