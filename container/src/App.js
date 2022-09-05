import React from "react";
import { BrowserRouter } from "react-router-dom";
import{mount} from 'marketing/MarketingApp';
import MarketingApp from './component/MarketingApp'
import Header from "./component/Header";
console.log(mount)
export default ()=>{
    return (
        <BrowserRouter>
            <div>
                 <Header />
                <MarketingApp />  
            </div>
         
        </BrowserRouter>
       
    )
}