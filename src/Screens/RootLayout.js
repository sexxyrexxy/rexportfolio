import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import ButtonToTop from "../Components/ButtonToTop";
function RootLayout() {
    return (  
        <>

        <NavBar/>
        
        <Outlet />
        </>
    );
}

export default RootLayout;