import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
function Products() {

    const Data='https://fakestoreapi.com/products';
    const [prodcuts,setProducts]=useState([]);
    useEffect(()=>{
        fetch(Data).then((resolvedValue)=>resolvedValue.json()).then((finalData)=>setProducts(finalData));
    },[])               //Puting dependancy [] to make the request only one time 
    return(
        <>
    <h2 className="display-4 text-center pt-5"> Our Products</h2>
     <div className="container mt-2 "> 
     <div className="row"> 
        {prodcuts.map((product)=> {
            return(
                <div className="col-3" key={product.id}>           {/* Calling The JSX from another component for not repeating the same thing and make it dynamic ! */}
                <ProductsList  product={product}/>
            </div>
            )
        })}  
     </div>
    </div>
        </>
    );
}
export default Products;