import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';

function Layout() {
    const [toggleMenu, setToggleMenu] = useState(true)
    const [notes, setNotes] = useState([])
    const navigate = useNavigate();

  return (
    <div className="App">
        <Header 
            toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
        <div className="main-section">
            {toggleMenu && <Menu 
            addNote={() => 
                (setNotes([...notes, {id: uuidv4(), title: 'Untitled', date: '', body: '', index: notes.length}]),
                navigate(`/${notes.length}`))
            }
            notes={notes}/>}
        <div className='content'>
            <Outlet />
        </div>
        </div>
    </div>
  );
}

export default Layout;