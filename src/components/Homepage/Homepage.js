import './Homepage.css';
import img from '../../images/Hero.jpg'
import Special from '../shared/Special';

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
            <div className="specials">
                <h1>This weeks specials!</h1>
                <br/>
                <button>Online Menu</button>                
                <Special Image="greeksalad.jpg" Name="Greek salad" Price="12.99" Details="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                <Special Image="bruchetta.jpg" Name="Bruchetta" Price="5.99" Details="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                <Special Image="lemon dessert.jpg" Name="Lemon Dessert" Price="5.00" Details="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
            </div>
            <div>Testomonials</div>
            <div>About</div>
        </main>
    );
};

export default Homepage;