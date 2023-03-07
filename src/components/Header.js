import Button from './Button';
import './header.css';

function Header( { toggleMenu } ) {

    return (
        <header>
            <div className='button-container'>
                <Button
                    type='menu-button'
                    text='&#9776;'
                    onClick={toggleMenu}
                />
            </div>
            <div className='page-title'>
                <h1>Lotion</h1>
                <h2>Like Notion, but worse.</h2>
            </div>
            <div className='bumper'></div>
        </header>
    )
}

export default Header;