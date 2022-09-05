import React from "react";
import{mount} from 'marketing/MarketingApp';
import MarketingApp from './component/MarketingApp'
console.log(mount)
export default ()=>{
    return (
        <>
            <h2>WelCome</h2>
         <MarketingApp />  
        </>
       
    )
}