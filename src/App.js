import React , { useState } from 'react';

import Card from './Components/Card';
const productData = require('./data.json');

console.log(productData);

const App = () => {
    const [ productList , setProductList ] = useState(productData.Product);
    const [ buttonActive , setButtonActive ] = useState();  
    const [ size , setSize ] = useState("");
    const [ sort , setSort ] = useState("");
 

    const filterByPrice = (e) => {
        if(e.target.value === 'high'){
            setProductList(productList.slice().sort((a , b) => a.Price < b.Price ? 1 : -1)) 
            setButtonActive(true);
        }else if(e.target.value === 'low'){
            setProductList(productList.slice().sort((a , b) => a.Price > b.Price ? 1 : -1)) 
            setButtonActive(false);
        }
    }

    const filterBySize = (e) => {
        if(e.target.checked){ 
            console.log('Click');
            setProductList( productList.filter(
            (product) => product.Size.indexOf(e.target.value) >= 0
        ))  
        } 
    }


    const filterByBrand = (e) => {
        if(e.target.value === ""){
            setProductList(productData.Product)
        }else{
            setProductList( productData.Product.filter((product) => product.Brand === e.target.value) )
        }
    }

    const filterByGender = (e) => {
        if(e.target.value === ""){
            setProductList(productData.Product)
        }else{
            setProductList(productList.filter((product) => product.For.indexOf(e.target.value) >= 0 ))
        }
    }

    return(
        <>
            <div>
                <div className = 'price-range'>
                    <button value = 'high' onClick = {(e) => filterByPrice(e)} className = {`price-button ${buttonActive ? 'active' : '' }`} >High</button>
                    <button value = 'low' onClick = {(e) => filterByPrice(e)} className = {`price-button ${buttonActive === false ? 'active' : '' }`} >Low</button>
                </div>
                <div className = 'size-selection'>
                    <h3>Size Range</h3>
                    <input type = 'checkbox' value = 'S' onClick = {(e) => filterBySize(e)} />
                    <label>S</label><br/>
                    <input type = 'checkbox' value = 'M' onClick = {(e) => filterBySize(e)} />
                    <label>M</label><br/>
                    <input type = 'checkbox' value = 'L' onClick = {(e) => filterBySize(e)} />
                    <label>L</label><br/>
                    <input type = 'checkbox' value = 'XL' onClick = {(e) => filterBySize(e)}  />
                    <label>XL</label><br/> 
                </div>
                <div className = 'brand-selection'>
                    <h3>Brand Selection</h3>
                    <select onChange = {(e) => filterByBrand(e)} >
                    <option value="">ALL</option>
                    <option value="NIKE">NIKE</option>
                    <option value="ADIDAS">ADIDAS</option>
                    <option value="HELMONT">HELMONT</option>
                    <option value="JUGULAR">JUGULAR</option>    
                    </select>
                </div>
                <div className = 'gender-selection'>
                    <h3>Ideal For</h3>
                    <select onChange = {(e) => filterByGender(e)} >
                    <option value="">ALL</option>
                    <option value="M">M</option>
                    <option value="F">F</option>    
                    </select>
                </div>
            </div>
            <div className = 'cards-container'>
                {
                    productList && productList.map((product) => 
                        <Card 
                            imgURL = {product.Image}
                            price = {product.Price}
                            brand = {product.Brand}
                            Name = {product.Name}
                            Size = {product.Size}
                            For = {product.For}
                        />
                    )
                }
            </div>
        </>
    )
    
}

export default App;