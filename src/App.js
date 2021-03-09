import React, { useEffect, useState } from 'react';
import fakeData from '../src/components/fakedata/fakedata.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Review from './components/Review/Review';


//  var [ps,setPs] =useState([])
//   const addEvent=(pd)=>{
     
//     let localPd= getDatabaseCart()
//     let localKey = Object.keys(localPd)
//     let matchingKey =  localKey.find(lKey=>{
//             if(lKey===pd.key){ 
//             addToDatabaseCart(pd.key,localPd[lKey]+1) 
//             pd.quantity =localPd[lKey]
           
//         }
//       return lKey ===pd.key     
//     })
//   if(!matchingKey){
//       addToDatabaseCart(pd.key,1)
//       pd.quantity = 1
//   } 

//    getUser() 
// }
// let [products,setProducts]= useState([])
// let [localVal,setLocalVal] = useState([])
// let [selectPd,setSelectPd] = useState([])
// useEffect(()=>{
// setProducts(fakeData)

//  let localPd= getDatabaseCart()
//   let localKey =Object.keys(localPd)
//   let val =Object.values(localPd)
//   let pd =localKey.map(keys=>{
//          let pds = products.find(pd=>pd.key==keys)         
//         return pds
// })
// setLocalVal(val);
// setSelectPd(...selectPd,pd)
// },[ps])

// console.log(selectPd)
const App =()=>{

  return (
    <div>
      
      <Router>
      <Route> 
        <Navbar></Navbar>
        </Route>
      <Switch>
        <Route path='/Home'>
         
        <Home></Home>
        </Route>
        <Route exact path='/'>
         
         <Home></Home>
         </Route>
        <Route path='/Review/:id'>
          <Review></Review>
        </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default  App;