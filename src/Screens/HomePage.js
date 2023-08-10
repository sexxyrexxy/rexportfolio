import Biography from "../Components/Biography";
import './HomePage.css';
import WelcomePage from "./WelcomePage";
import { useState } from "react";
import ButtonToTop from '../Components/ButtonToTop';
function HomePage() {
    return (        
    <div className='HomePage'>
        <Biography />
    </div> );
}

export default HomePage;