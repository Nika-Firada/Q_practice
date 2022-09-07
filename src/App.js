import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

function App() {
  const theme = useState('darkblue')
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to='/'>
            <h1>Adopt Me!</h1>
          </Link>
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
