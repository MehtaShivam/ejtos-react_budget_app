
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch  } = useContext(AppContext);

    const submitEvent = (symbol) => {
        let load = symbol;
        switch (symbol) {
            case '£ Pound':
                load = '£';
                break;
            case '$ Dollar':
                load = '$';
                break;
            case '€ Euro':
                load = '€';
                break;
            case '₹ Rupee':
                load = '₹'; 
                break;
        
        }
            dispatch({
                type: 'CHG_CURRENCY',
                payload: load,
            });
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => submitEvent(event.target.value)}>
                        <option defaultValue>£</option>
                        <option value="£ Pound" name="marketing">£ Pound</option>
                <option value="$ Dollar" name="sales">$ Dollar</option>
                <option value="€ Euro" name="finance">€ Euro</option>
                <option value="₹ Rupee" name="hr">₹ Rupee</option>
                  </select>

                  
                </div>
            </div>
        </div>
    );
};

export default Currency;