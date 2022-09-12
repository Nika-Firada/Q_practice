import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import {Provider} from 'react-redux'
import store from "./store";


function App() {
  
  return (
    <Provider store={store}>
      <div style={{background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)"}}>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
