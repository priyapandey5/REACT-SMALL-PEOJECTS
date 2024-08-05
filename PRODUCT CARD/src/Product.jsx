import "./Product.css";
import Price from "./Price";

function Product ({title,idx}) {
    let description = [["Red Apple","America"] ,
                      ["Orange orange","Canada"] , 
                      ["Green lichi","Australia"]];
  let oldPrices = ["100" , "200" , "300"];
  let newPrices = ["150" , "250" , "350"];

    return (
        <div className="Product">
        <h4>{title}</h4>
        <p>{description [idx][0]}</p>
        <p>{description [idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        
        </div>
    )
}

export default  Product;