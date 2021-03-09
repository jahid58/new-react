import React, { useEffect, useState } from 'react';
import './home.css'
import Product from '../Product/Product';

const Home = () => {
  let [countries,setCountries]= useState([]) 
  console.log(countries)
useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data.slice(0,15)))
},[])
const cnEvent = cn=>{
    console.log('country')
}

    return (
        <div className='home'>
            <div className="home_first_child">

          {
              countries.map(cn=><Product cn={cn} cnEvent={cnEvent}></Product>)
          } 
            
            </div>
           
            
        </div>
    );
};

export default Home;