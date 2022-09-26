import React, {useState} from "react";


import DisplayTotalAssets from "./DisplayTotalAssets";
import DisplayAssetTable from "./DisplayAssetTable";
// import AssetButtons from "./AssetButtons";

function PortfolioPage (){

    const [assets, setAssets] = useState([]);
     // add assetData into array
    
    const addAsset = (assetData) => {
        setAssets([...assets, assetData]);
    }

    return(
        <div>
            <DisplayTotalAssets assets={assets}/>
            {/* <AssetButtons/> */}
            <DisplayAssetTable assets={assets} addAsset={addAsset}/>
        </div>
    );
}

export default PortfolioPage;