import React from "react";
import { BrowserRouter } from "react-router-dom";
import{mount} from 'marketing/MarketingApp';
import MarketingApp from './component/MarketingApp'
import Header from "./component/Header";
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
// console.log(mount)
const generateClassName = createGenerateClassName({
    productionPrefix: "co",
    // setting prefix random with co(name) starting in production mode to make unique
    // so it will not collide
})
export default ()=>{
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                 <Header />
                <MarketingApp />  
            </div>
            </StylesProvider>
            
         
        </BrowserRouter>
       
    )
}