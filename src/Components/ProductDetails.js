import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from './ProductsList';
function ProductDetails(){
    const Data='https://fakestoreapi.com/products'
    const params =useParams();
    console.log(params);
    const[details,setDetails]=useState({});
    useEffect(()=>{
        fetch(`${Data}/${params.productId}`).then((resolvedValue)=>resolvedValue.json()).then((finalData)=>setDetails(finalData)); 
        //Data stored in details now
        //params.productId must be written the same way as it is written inside the app js file

    },[])

    return(
        <>
        <ProductsList product={details} showButton={false}/>   
        {/* Sending details,showButton as props to products List  */}
        </>
    )
}
export default ProductDetails;