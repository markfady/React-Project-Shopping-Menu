import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import "./Products.css";
function Products() {

    const Data='https://fakestoreapi.com/products';
    const [products,setProducts]=useState([]);
    const [categories,setCategories]=useState([]);

    const getProducts=()=>{
        fetch(Data).then((resolvedValue)=>resolvedValue.json()).then((finalData)=>setProducts(finalData));
    };
    const getCategories=()=>{
        fetch(`${Data}/categories`).then((resolvedValue)=>resolvedValue.json()).then((finalData)=>setCategories(finalData))
        //using api for categories names for button names
    };
    const shownData=(catname)=>{    
        fetch(`${Data}/category/${catname}`).then((resolvedValue)=>resolvedValue.json()).then((finalData)=>setProducts(finalData)); 
        //using api for categories Names then concat the specific category name to it (after clicking on button)
    };
    useEffect(()=>{
        getProducts();
        getCategories();

    },[])               //Puting dependancy [] to make the request only one time 
    return(
        <>
    <h2 className="display-4 text-center pt-5"> Our Products</h2>
    <div className="container mt-2 "> 
        <button 
        onClick={()=>{
        getProducts();
        }}
        className="btn btn-primary options"> ALL</button>
    {               
        // Here we use two api s one to print the name of categories on each button 
        // Another api to show specifc data after clicking the specific button
            categories.map((cat)=>{
                return(
                    <button
                    key={cat} 
                    onClick={()=>{
                        shownData(cat);     
                    }}
                    className="btn btn-primary options"> {cat} 
                    </button>
                )
            })
        }
    <div className="row"> 
        {products.map((product)=> {
            return(
                <div className="col-3" key={product.id}>           {/* Calling The JSX from another component for not repeating the same thing and make it dynamic ! */}
                <ProductsList  product={product} showButton={true}/> 
                {/* Giving showButton Value true to show it in conditional Rendering process inside ProductsList */}
            </div>
            )
        })}  
    </div>
    </div>
        </>
    );
}
export default Products;