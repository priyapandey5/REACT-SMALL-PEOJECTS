export default function Price({oldPrice,newPrice}){
    let oldStyles = { textDecorationLine:"line-through",};
    let newStyles = { fontWeight:"bold"};
    let style = { backgroundColor:"#e0c367", height: "30px",
                borderBottomLeftRadius:"14px",borderBottomRightRadius:"14px",};

    
    return(
        <div style={style}>
            <span style = {oldStyles}>{oldPrice}</span> &nbsp;&nbsp;
            <span style = {newStyles}>{newPrice}</span>
        </div>
    );
}