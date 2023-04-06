import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"
const RootLayout = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    )

}

export default RootLayout