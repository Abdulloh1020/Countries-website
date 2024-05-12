import './project.css'
import Countries from '../components/Country';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './project.css'
import search from '../assets/search.svg'
import Loading from '../assets/loading.svg'
import Header from './Header';


const Project = ()=>{

    const [Region, setRegion] = useState('')

    const [Search, setSearch] = useState('')  

    const [Country, setCount] = useState([]);

    const Refrens = useRef();
    
    async function GetElements (){
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCount(response.data);
    };

    useEffect(()=>{;
      GetElements();
    },[]);

    

    
    return (
        <div>
          <div className='body' >  
          <Header/>
          <main>
            <section className='hero'>
              <div className='container'>
                <div className='hero-div'>              
                  <div className='hero-searchdiv'>
                    <img className='hero-searchimg' src={search} alt='serach'/>
                    <input className='hero-input' type='text' ref={Refrens} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a country…'/>
                    <select className='hero-select'  >
                      <option disable selected hidden>Filter by Region</option>
                      <option onChange={(e)=>setRegion(e.target.value)} className='hero-option'>Africa</option>
                      <option onChange={(e)=>setRegion(e.target.value)} className='hero-option'>Americas</option>
                      <option onChange={(e)=>setRegion(e.target.value)} className='hero-option'>Asia</option>
                      <option onChange={(e)=>setRegion(e.target.value)} className='hero-option'>Europa</option>
                      <option onChange={(e)=>setRegion(e.target.value)} className='hero-option'>Oceania</option>                  
                    </select>                                                
                  </div>                         
                  <div className='hero-countrydiv'> 

                  {Country.length === 0 ? (<img	src={Loading} className='loading' alt='' />) : 
                  (Country.filter((item) => {
                    return Search.toLocaleLowerCase() === '' ? item : item.name.common.toLocaleLowerCase().includes(Search);
                  }).map((e) => {
						      return <Countries data={e} key={e.name.common} />;})
			            )}  

                  </div>
                </div>
              </div>
            </section>
          </main>
          </div>
        </div> 
      );
};

export default Project;