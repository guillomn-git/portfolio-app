import React, {useState} from "react";
// import AssetButtons from "./AssetButtons";
import './table.css';

function DisplayAssetTable({addAsset, assets}){
    
    //set up "assets" array and "assetData" object that goes into the array
    const [assetData, setAssetData] = useState({
        type: "",
        name: "",
        quantity: "",
        value: 0
    });
    
    const handleChange = (e) => {
        setAssetData(
            {
                ...assetData,
                    [e.target.name]: e.target.value
                }
            );
        }

    const addAssetData = (e) => {
            e.preventDefault();
            
            addAsset(assetData);
            setAssetData({
                type: "",
                name: "",
                quantity: "",
                value: 0
            }
        );
        }

    return(
        <div>

            <div style={{textAlign: "center", textShadow: "2px 2px 4px #000000"}}>
                    
                    <form>
                        <label htmlFor='type'>Type </label>
                        <input type='text' name='type' value={assetData.type}
                        onChange={ (e) => handleChange(e)}/><br/>
                    
                        <label htmlFor='name'>Name </label>
                        <input type='text' name='name' value={assetData.name}
                        onChange={ (e) => handleChange(e)}/><br/>
                        
                        <label htmlFor='quantity'>Quantity </label>
                        <input type='text' name='quantity' value={assetData.quantity}
                        onChange={ (e) => handleChange(e)}/><br/>
                       
                        <label htmlFor='value'>Value </label>
                        <input type='number' name='value' value={assetData.value}
                        onChange={ (e) => handleChange(e)}/><br/>

                        <input type="submit" onClick={ (e) => addAssetData(e)}/>
                    </form>
                    
            </div>

            <div className="table">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Asset name</th>
                                <th>Quantity</th>
                                <th>Value (€)</th>
                            </tr>
                        </thead>

                        <thead>
                            {assets.map((asset, index) => (
                                        <tr key={index}>
                                        <td>{asset.type}</td>
                                        <td>{asset.name}</td>
                                        <td>{asset.quantity}</td>
                                        <td>€{asset.value}</td>
                                    </tr>
                                )
                            )}
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DisplayAssetTable;