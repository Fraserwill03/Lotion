import { useState, useEffect } from 'react'
import Header from './Header';
import Menu from './Menu';

function Layout() {
    const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <div className="App">
        <Header 
            toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
        <div className="main-section">
            {toggleMenu && <Menu 
            addNote={() => console.log('note added')}/>}
        </div>
    </div>
  );
}

export default Layout;