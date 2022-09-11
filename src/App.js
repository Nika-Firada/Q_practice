import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

function App() {
  const theme = useState('darkblue')
  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-0 m-0" style={{background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)"}}>
        <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500">
          <Link className="text-6xl text-white hover:text-gray-300" to='/'>Adopt Me!</Link>
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
