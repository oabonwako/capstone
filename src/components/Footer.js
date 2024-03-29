import {Link} from 'react-router-dom';

function Footer() {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        padding: '35px',
    }

    const lists = {
        padding: '15px',
        listStyleType: 'none',
    }

    return(
        <footer style={styles}>
            <div className='footer-img'></div>
            <div>
                <h2>Site Map</h2>
                <ul style={lists}>
                    <Link to='/'><a href='oabo.com'>HOME</a></Link>
                    <li><a href='oabo.com'>ABOUT</a></li>
                    <li><a href='oabo.com'>MENU</a></li>
                    <Link to='/booking'><a href='oabo.com'>RESERVATIONS</a></Link>
                    <li><a href='oabo.com'>ORDER ONLINE</a></li>
                    <li><a href='oabo.com'>LOGIN</a></li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul style={lists}>
                    <li>Address</li>
                    <li>Telephone</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h2>Social Media Links</h2>
                <ul style={lists}>
                    <li><a href='oabo.com'>Facebook</a></li>
                    <li><a href='oabo.com'>Instagram</a></li>
                    <li><a href='oabo.com'>Stackoverflow</a></li>
                    <li><a href='oabo.com'>Github</a></li>
                    <li><a href='oabo.com'>X</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;