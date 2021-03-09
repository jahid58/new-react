import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../fakedata/fakedata.json'

const OrderReview = () => {


    return (
        <div>
            <h1>product:</h1>
            <h4>item:</h4>
            <h3>total price :  </h3>
            <Link to='/OrderReview'><button>place order</button></Link>
        </div>
    );
};

export default OrderReview;