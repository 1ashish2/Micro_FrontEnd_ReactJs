import React,{lazy,Suspense,useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Header from './components/Header';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
const AuthApp = lazy(() => import('./components/AuthApp'))
const MarketingApp = lazy(()=>import('./components/MarketingApp'))
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
           <Suspense fallback={<Progress />}>
          <Switch>
           
              <Route path="/auth">
                <AuthApp onSignIn={() =>setIsSignedIn(true)} />
                </Route>
           
                 <Route path="/" component={MarketingApp} />
           
           
            </Switch>
            </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
