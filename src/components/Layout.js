import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Outlet, useParams } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';

function Layout() {
    useEffect(() => {
        
    })

    function formatDate(date) {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}T${hours}:${minutes}:${seconds}`
    }

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
                (setNotes([...notes, {id: uuidv4(), title: 'Untitled', date: formatDate(new Date), body: '', index: notes.length + 1}]),
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