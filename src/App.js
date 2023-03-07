import { BrowserRouter, Route, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import View from "./components/View";
import Editor from "./components/Editor";


function App() {
  const Base = () => useRoutes([
    { path: '/', element: <Layout /> },
    { path: '/notes', element: <Layout /> },
  ]);
  
  return (
  <BrowserRouter>
        <Base >
          <Route path='/' element={<div className='empty-content'>Select a note, or create a new one.</div>}></Route>
          <Route path='/:index' element={<View/>}></Route>
          <Route path='/:index/edit' element={<Editor />}></Route>
        </Base>
    </BrowserRouter>
  );
}

export default App;
