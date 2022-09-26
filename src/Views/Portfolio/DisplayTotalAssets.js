import React from "react";
// import NumberFormat from "react-number-format";

function DisplayTotalAssets(assets){

    console.log(assets);

    const total = Array.isArray(assets.assets)
    ? assets.assets.reduce((accum , item) => accum + Number(item.value), 0)
    : "-";
    
    return(
        <div style={{marginBottom: "100px", textAlign: "center", textShadow: "2px 2px 4px #000000"}}>
            
            <p>Total Assets Value</p>
            
            <div style={{fontSize: 56, margin: -50}}>
                <p>€ {total.toLocaleString("en-GB")}
                  
                    {/* <NumberFormat
                        value={total}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                /> */}
                
                </p>
            </div>
        </div>
    );
}

export default DisplayTotalAssets;