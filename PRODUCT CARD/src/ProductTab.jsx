import Product from "./Product.jsx";

function ProductTab() {
    let styles = { display:"flex", flexwrap:"wrap",justifyContent:"center", alignItems:"center"};
    return (
        <div style = {styles}>
        <Product title="Apple"  idx={0}/>
         <Product  title="Orange" idx={1}/>
         <Product title="Lichi" idx={2}/>
         </div>
    );
}

export default ProductTab;