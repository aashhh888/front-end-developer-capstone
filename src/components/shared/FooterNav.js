import './FooterNav.css';

const FooterNav = (props) => {

    return (
        <div className='footerNavContainer'>
        <b>{props.navHeading}</b>
        <ul>
            {props.navItems.map((data) => {
                return (
                    <li> {data} </li>
                )
            })}
        </ul>
        </div>
    );
};

export default FooterNav;