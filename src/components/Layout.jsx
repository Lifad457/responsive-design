import { Outlet } from "react-router-dom"
import GlobalStyle from "../styles/index-global-styles.css"

export default function Layout() {
    return (
        <>
            <GlobalStyle />
            
            <Outlet />
        </>
    )
}