
import "./ProductsList.css";
function ProductsList(props){  //We will use this as reusable component to loop on this and create many components in Products

        const {product}=props; //Destructuring process
    return(
        <>
    <div className="card mt-5 border-style" style={{width:"18rem" }}> 
     <img src={product.image} className="card-img-top product-image" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text description">{product.description}</p>
    <p className="font-weight-bold"> Price :{product.price}</p>
    <a href="/#" className="btn btn-primary buy">Buy Product</a>
    
  </div>
    </div>
        
        </>
    );
}
export default ProductsList;