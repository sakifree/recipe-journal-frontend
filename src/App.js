import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchBar/>
      <Outlet/>
    </div>
  );
}

export default App;
