import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Review = () => {
    let {id} =useParams()
    console.log(id)
    let [country,setCountry] = useState({})
    useEffect(()=>{
        const url= `https://restcountries.eu/rest/v2/name/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(...data))
    },[id])
    console.log(country)
// let population = country.length ? country[0].population:'nan'
// let area = country.length ? country[0].area : 'nan'

    return (
        <div>
            <h2>fuck</h2>
            <h1>product:{country.area }</h1>
            <h4>item:{country.population}</h4>
            <button>fuck you</button>
        </div>
    );
};

export default Review;