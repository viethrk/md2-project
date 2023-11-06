import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIndex from "./pages/site-admin/home";

function App() {
  return (
    <div className="App min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <HomeIndex />
      </div>
    </div>
  );
}

export default App;
