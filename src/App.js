import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import View from "./components/View";
import Editor from "./components/Editor";


function App() {
  
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<div className='empty-content'>Select a note, or create a new one.</div>}></Route>
          <Route path='/:index' element={<View/>}></Route>
          <Route path='/:index/edit' element={<Editor />}></Route>
        </Route>
        <Route path='/notes' element={<Layout />}>
          <Route path='/' element={<div className='empty-content'>Select a note, or create a new one.</div>}></Route>
          <Route path='/:index' element={<View/>}></Route>
          <Route path='/:index/edit' element={<Editor />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
