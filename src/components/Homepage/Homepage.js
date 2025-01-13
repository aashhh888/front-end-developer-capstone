import './Homepage.css';
import img from '../../images/Hero.jpg'

const Homepage = () => {
    return (
        <main>
            <div className="hero">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on transnational recipes served with a modern twist. 
                </p>
                <button>Reserve a Table</button>
                <img src={img}></img>
            </div>
            <div>Specials</div>
            <div>Testomonials</div>
            <div>About</div>
        </main>
    );
};

export default Homepage;