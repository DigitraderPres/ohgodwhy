// React container component
import React from 'react';
import ViewComponent from './ViewComponent'

function thisIsPlainJs () {
   // get me some data from apiUrl
   const data = fetch(apiUrl)
   return data;
}

const Container = () => {
   // this calls the function and gets the result
   const someData = thisIsPlainJs();
   // the result can then be passed on to the view component
   // <ViewComponent/> doesn't have any logic just use the data to render html
   return <ViewComponent data={...someData}/>
}

export default Container;