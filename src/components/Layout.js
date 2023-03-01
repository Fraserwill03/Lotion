import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Outlet, useParams } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';

function Layout() {
    useEffect(() => {
        
    })
    const [toggleMenu, setToggleMenu] = useState(true)
    const [notes, setNotes] = useState([])
    const navigate = useNavigate();
    const { index } = useParams();

  return (
    <div className="App">
        <Header 
            toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
        <div className="main-section">
            {toggleMenu && <Menu 
            addNote={() => 
                (setNotes([...notes, {id: uuidv4(), title: 'Untitled', date: '123', body: '', index: notes.length + 1}]),
                    navigate(`/${notes.length + 1}/edit`))
            }
            notes={notes}/>}
        <div className='content'>
            {index === undefined ? <Outlet /> : <Outlet context={notes[parseInt(index) - 1]}/>}
        </div>
        </div>
    </div>
  );
}

export default Layout;