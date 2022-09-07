import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

function App() {
  return (
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
  );
}

export default App;
