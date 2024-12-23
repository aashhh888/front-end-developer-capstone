import './Footer.css';
import logo from  '../../images/Logo.png'
import FooterNav from './FooterNav';

const Footer = () => {
    return (
        <footer>
            <div className='footerContainer'>
                <img src={logo} />
                <FooterNav navHeading="Navigation" navItems={["Home", "About", "Menu", "Reservations", "Order Online", "Login"]} />
                <FooterNav navHeading="Contact" navItems={["Address", "Phone Number", "Email"]} />
                <FooterNav navHeading="Social Media Links" navItems={["Address", "Phone Number", "Email"]} />
            </div>
        </footer>
    );
};

export default Footer;