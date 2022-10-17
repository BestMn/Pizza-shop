import useWindowSize from "../../Hooks/useWindowSize";
import { NavLink } from "react-router-dom";
import { Container, Button, AppBar, Toolbar } from "@mui/material";
import "./Header.css";

const Header = () => {
    const windowSize = useWindowSize();
    return (
        <AppBar sx={{ bgcolor: "white", py: 1 }} position="static">
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <div className="header__info-container">
                        <div className="header__logo-container">
                            <NavLink to="/">
                                <img
                                    src="https://demo.foodninja.pro/wp-content/uploads/2022/05/logo_default.svg"
                                    className="header__logo"
                                />
                            </NavLink>
                        </div>
                        {windowSize.innerWidth < 800 ? null : (
                            <>
                                <div className="header__info-block">
                                    <div className="header__info-block-title">
                                        Ваш город Курган
                                    </div>
                                    <div className="header__info-block-content">
                                        <a href="tel:8 (3522) 662-802">
                                            8 (3522) 662-802
                                        </a>
                                    </div>
                                </div>
                                <div className="header__info-block">
                                    <div className="header__info-block-title">
                                        Мы работаем
                                    </div>
                                    <div className="header__info-block-content">
                                        с 09:00 до 22:00
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        variant="contained"
                        color="warning"
                        size="large"
                        disableElevation
                        sx={{ borderRadius: "20px" }}
                    >
                        Войти
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
