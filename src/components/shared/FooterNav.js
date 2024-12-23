const FooterNav = (props) => {

    return (
        <div>
        {props.navHeading} 
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