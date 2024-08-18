import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import {Routes} from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./question/Add";
import AllQuestion from "./question/AllQuestion";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        {/*<Route path="/home" element={<HomePage/>}/>*/}

        {/*task routes*/}
        <Route path="/add" element={<Add/>}/>
        <Route path="/home" element={<AllQuestion/>}/>

      </Routes>
    </Router>
  );
}

export default App;
