import React from 'react';

const Card = ({ imgURL , Name , price , brand , Size , For}) => {
    // console.log(imgName);
    return(
        <div className = 'card_container'>
            <img 
            src = {imgURL}
            alt =  {Name + 'image'}
            className = 'card_poster'
            />
            <div className = 'info'>
                <p><b>{Name}</b></p>
                <p>₹{price}</p>
                <p>{brand}</p>
                {
                    Size && Size.map((size) => (
                        <span> {size} </span>
                    ))
                }
                <br/>
                {
                    For && For.map((gender) => (
                        <span> {gender} </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;
