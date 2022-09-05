import React from "react";
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
    // setting prefix random with ma(name) starting in production mode to make unique
    // so it will not collide
})

const App=()=>{
    return(
        <div>
            <StylesProvider generateClassName={generateClassName} >
                <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/" component={Landing}/>
                </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

export default App;