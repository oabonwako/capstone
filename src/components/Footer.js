import footerImg from '../assets/restaurant chef B.jpg';

function Footer() {
    const styles = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '15px',
        backgroundColor: 'grey',
    }

    const lists = {
        padding: '15px',
        listStyleType: 'none',
    }

    const imgstyle = {
        width: '500px',
        height: '400px',
    }

    return(
        <footer style={styles}>
            <div><img src={footerImg} alt='footer-img' style={imgstyle} /></div>
            <div>
                <h2>Doormat Navigation</h2>
                <ul style={lists}>
                    <li><a href='oabo.com'>HOME</a></li>
                    <li><a href='oabo.com'>ABOUT</a></li>
                    <li><a href='oabo.com'>MENU</a></li>
                    <li><a href='oabo.com'>RESERVATIONS</a></li>
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