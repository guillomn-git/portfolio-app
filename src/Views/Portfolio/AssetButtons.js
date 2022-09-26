import React from "react";

function AssetButtons(){
    return (  
    <div style={{paddingTop: 50,textAlign: "center", textShadow: "2px 2px 4px #000000"}}>
        <h2>Assets</h2>
    
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", marginBottom: "20px", padding: "10px"}}>
            <ul>
                <li>
                    <a style={{border: "1px solid", borderRadius: '25px'}} href="http://localhost:3000/assetform">add asset</a>
                </li>
                {/* <li>
                    <a style={{border: "1px solid", borderRadius: '25px'}} href="http://localhost:3000/portfolio">remove asset</a>
                </li> */}
            </ul>
        </div>
    </div>);
}

export default AssetButtons;