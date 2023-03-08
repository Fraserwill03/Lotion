import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import View from "./components/View";
import Editor from "./components/Editor";


function App() {
  
  return (
  <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/notes' />} /> 
            <Route path='/notes' element={<div className='empty-content'>Select a note, or create a new one.</div>}></Route>
            <Route path='/notes/:index' element={<View/>}></Route>
            <Route path='/notes/:index/edit' element={<Editor />}></Route>
            <Route path='*' element={<Navigate to='/notes' />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
