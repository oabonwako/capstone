import { Link } from 'react-router-dom';

function HeroSection() {
    return(
        <div>
            <header>
                <div className="textbox">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button><Link to='/booking'>Reserve a Table</Link></button>
                </div>
                <div className="imagebox"></div>
            </header>
        </div>
    );
}

export default HeroSection;