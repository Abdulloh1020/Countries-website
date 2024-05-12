

const Countries = ({data})=>{
    return (
        <div>               
            <a href={'/single/'+ data.name.common} className="countries-link">
            <div className="countries">                       
            <img className="countries-img" src={data.flags.png} alt={data.flags.alt} width={264} height={160}/>
            <h2 className="countries-name">{data.name.common}</h2>
            <div className="countries-div">
            <p className="countries-p"><strong className="strong">Population: </strong>{data.population}</p>
            <p className="countries-p"><strong className="strong">Region: </strong>{data.region}</p>
            <p className="countries-p"><strong className="strong">Capital: </strong>{data.capital}</p>
            </div>                     
            </div>
            </a>                 
        </div>
    );
};

export default Countries