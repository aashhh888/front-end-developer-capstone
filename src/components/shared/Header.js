import './Header.css';
import logo from  '../../images/Logo.svg'
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className='headerContainer'>
                <img src={logo} />
                <Nav />
            </div>
        </header>
    );
};

export default Header;