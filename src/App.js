import { Route, Routes } from 'react-router-dom';
import './App.css';
import Project from './components/project';
import Page from './pages/Secondpage';


function App(){
  

  return (
    <div className='App'>  
    <Routes>
      <Route index element={ <Project/>} />
      <Route path='/single/:name' element={<Page/>} />
      <Route path='/' Component={Project}/>
    </Routes>
    </div> 
  );
}

export default App;