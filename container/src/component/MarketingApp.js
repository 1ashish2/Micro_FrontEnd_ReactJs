import{mount} from 'marketing/MarketingApp';
import React,{useRef,useEffect} from 'react';

export default ()=>{
    const ref=useRef(null);
    useEffect(()=>{
     mount(ref.current);//becoz we are getting function mount but we need component to load in container(App.js) so by using ref we can do that
    },[])
    return <div ref={ref} />
}