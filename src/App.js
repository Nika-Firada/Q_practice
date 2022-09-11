import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
// const Details = lazy(()=> import('./Details'))
// const SearchParams = lazy(() => import('./SearchParams'))

function App() {
  const theme = useState('darkblue')
  return (
    <ThemeContext.Provider value={theme}>
        <div style={{background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)"}}>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
    </ThemeContext.Provider>
    );
}

export default App;
