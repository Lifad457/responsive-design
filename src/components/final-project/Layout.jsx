import { Outlet } from "react-router-dom";
import GlobalStyle from "../../styles/final-project/global-styles.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}