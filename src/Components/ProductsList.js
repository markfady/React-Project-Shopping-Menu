
import "./ProductsList.css";
import {Link} from"react-router-dom";
function ProductsList(props){  //We will use this as reusable component to loop on this and create many components in Products

        const {product,showButton}=props; //Destructuring process {Taking the data from Product.js and productDetails}    //showButton from ProductDetails.js
    return(
        <>
    <div className="card mt-5 border-style" style={{width:"18rem" }}> 
    <img src={product.image} className="card-img-top product-image" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text description">{product.description}</p>
    <p className="font-weight-bold"> Price :{product.price}</p>
    {
        showButton && <Link to={`products/${product.id}`} className="btn btn-primary buy">Buy Product</Link> 
        //Conditional Rendring,Here we assign conditon if it is true inside the Home page (button will appear)
        //if it is false like in ProductDetails will hide the button 
    }

</div>
    </div>
        
        </>
    );
}
export default ProductsList;