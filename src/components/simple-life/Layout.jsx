import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyle from "../../styles/simple-life/global-styles.css"

function Layout() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout