import './header.css'
import World from '../assets/Where in the world_.svg'
import Group from '../assets/Group 5.svg'


const Header = ()=>{


    return (

        <header className='header'>
        <div className='container'>
          <div className='header-div'>            
              <a href='/'><img className='headerlogo' src={World} alt='logo'/></a>
              <img className='header-mode' src={Group}  alt='moon' />
          </div>
        </div>
      </header>
    )
}

export default Header