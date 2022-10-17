import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
    typography: {
        fontFamily: `"Montserrat", sans-serif`,

        button: {
            textTransform: "none",
        },
    },
});

export default defaultTheme;
