import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './pages/Secondpage';
import Project from './components/Project';


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