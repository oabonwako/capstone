import logo from '../assets/logo.jpg';
//npm install react-router-dom@6
import { Link } from 'react-router-dom';

function Nav() {
    const styleLogo = {
        height: '70px',
        width: '15%',
    }
    const lists = {
        padding: '15px',
        listStyleType: 'none',
    }

    const ulists = {
        display: 'flex',
        justifyContent: 'center',
    }

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
    }
    return(
        <nav style={navStyle}>
            <img src={logo} alt="logo" style={styleLogo}/>
            <ul style={ulists}>
                <Link style={lists} to='/'>HOME</Link>
                <Link style={lists}>ABOUT</Link>
                <Link style={lists}>MENU</Link>
                <Link style={lists} to='/booking'>RESERVATIONS</Link>
                <Link style={lists}>ORDER ONLINE</Link>
                <Link style={lists}>LOGIN</Link>
            </ul>
        </nav>
    );
}

export default Nav;