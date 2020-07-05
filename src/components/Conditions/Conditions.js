import React from 'react';
import classes from './Conditions.module.css'

const conditions = (props) => {
    function getSunscreenMsg(e) {
        if (e >= "0" && e <= "2") {
            return "No need to wear sunscreen!";
        } else if (e >= "3" && e <= "7") {
            return "Wear sunscreen and a hat!";
        } else {
            return "Stay inside or in the shade! Wear a hat, sunglasses, and sunscreen!";
        }
    }

    return (
       <div className = {classes.Wrapper}>
           {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.loading && <div className={classes.Loader}>Loading...</div>}
           {props.responseObj.location ?
               <div>
                   <p><strong>{props.responseObj.location.name}</strong></p>
                   <p>The UV index is currently {props.responseObj.current.uv_index}.</p>
                   <p>{getSunscreenMsg(props.responseObj.current.uv_index)}</p>
               </div>
           : null
           }
       </div>
    )
}

export default conditions;