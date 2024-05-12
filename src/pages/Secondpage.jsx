import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import './Page.css'
import shape from '../assets/shape.svg'




const Page = ()=>{
   
    const [country, setCountry]= useState({})

    const { name }  = useParams()

    async function GETSINGLE(name){
    try{
      const res = await axios.get('https://restcountries.com/v3.1/name/' + name)
      setCountry( res.data[0])
    } catch (error) {
      console.log(error)
    }}

    useEffect(  ()=>{GETSINGLE(name)},[name])          

    return (
        <div className='' >
          <Header/>
          <div className="container">
            <div className="big-div">           
            <div className="img-div">    
              <a href={'/'}><button className="buttonn"><img className="button-img" src={shape}/> Back </button></a>          
              <img className="country-img" src={country.flags?.png} alt="" />
            </div>
            <div className="text-div">
             <h2 className="country-name">{country.name?.common}</h2>
              <div className="bigger-div">         
             <div className="f-div">                
                <p className="p-text"><strong className="strong-text">Native Name: </strong>{country.name?.common}</p>                
                <p className="p-text"><strong className="strong-text">Population: </strong>{country?.population}</p>                
                <p className="p-text"><strong className="strong-text">Region: </strong>{country?.region}</p>               
                <p className="p-text"><strong className="strong-text">Sub Region: </strong>{country?.subregion}</p>               
                <p className="p-text"><strong className="strong-text">Capital: </strong>{country?.capital}</p>                                                  
             </div>
              <div className="s-div">
                <p className="pp-text"><strong className="strong-text">Top Level Domain: </strong>{country?.tld}</p>
                <p className="ppp-text"><strong className="strong-text">Currencies: </strong></p>
                <p className="pppp-text"><strong className="strong-text">Languages: </strong></p>           
             </div> 
             </div>      
                <p className="end-text"><strong className="strong-text">Border Countries:  </strong>{country.borders}</p>                      
            </div>            
            </div>
          </div>   
        </div>
    )
}


export default Page