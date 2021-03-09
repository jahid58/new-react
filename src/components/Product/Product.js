import React from 'react';
import { useHistory } from 'react-router-dom';
import './product.css'
const Product = (props) => {
let cnEvent = props.cnEvent
let cn =props.cn
 let {name,population} = cn
 let history = useHistory()
 const handleCountry=(pt)=>{
     history.push(`/Review/${pt}`)
 }
    return (
        <div className='product'>
            <h2>{name}</h2>
            <h4>{population}</h4>
            <button onClick={()=>handleCountry(name)}>click here</button>

           </div>
    );
};

export default Product;