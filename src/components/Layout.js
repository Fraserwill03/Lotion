import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Outlet, useParams } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import './layout.css';

function Layout() {
    const [toggleMenu, setToggleMenu] = useState(true)
    const [notes, setNotes] = useState([])
    const navigate = useNavigate();
    const { index } = useParams();
    
    useEffect(() => {
        //save notes to local storage
        localStorage.setItem(notes.id, JSON.stringify(notes))

    }, [notes])

    function formatDateObject(date) {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}` +
            `T${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}` +
            `:${seconds < 10 ? '0' : ''}${seconds}`
    }

    function addNote() {
        setNotes([...notes, {id: uuidv4(), title: 'Untitled', date: [formatDateObject(new Date()), false], body: '', index: notes.length + 1}])
        navigate(`/${notes.length + 1}/edit`)
    }

  return (
    <div className="App">
        <Header 
            toggleMenu={() => setToggleMenu(!toggleMenu)}
        />
        <div className="main-section">
            {toggleMenu && <Menu 
            addNote={() => 
                addNote()
            }
            notes={notes}
            current={index}/>}

        {index === undefined ? <Outlet /> : <Outlet context={[notes, setNotes]}/>}
        
        </div>
    </div>
  );
}

export default Layout;