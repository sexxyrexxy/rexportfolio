import Biography from "../Components/Biography";
import Welcome from "../Components/Welcome";
import './HomePage.css';
import Contact from "../Components/Contact";
function HomePage() {
    return ( 

    <div className='HomePage'>
        <Welcome />
        <Biography />
        <Contact />
    </div> );
}

export default HomePage;