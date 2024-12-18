import logo from  '../images/Logo.svg'
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <img src={logo} />
            <Nav />
        </header>
    );
};

export default Header;