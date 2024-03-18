import logo from '../assets/logo.jpg';

function Nav() {
    return(
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href='oabo.com'>HOME</a></li>
                <li><a href='oabo.com'>ABOUT</a></li>
                <li><a href='oabo.com'>MENU</a></li>
                <li><a href='oabo.com'>RESERVATIONS</a></li>
                <li><a href='oabo.com'>ORDER ONLINE</a></li>
                <li><a href='oabo.com'>LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;