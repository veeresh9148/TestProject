import React  from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./routes.css"
import Home from './pages/home';
import About from './pages/about';

 function RouterExample (){

    return(
        <div>
            <h2>React - Router</h2>
            <Router>
                <nav>
                    <Link to="/" id="welcome">Home</Link><br></br>
                    <Link to="/about" id="about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/about" element = {<About/>}/>
                </Routes>
            </Router>
        </div>
    )
 }

 export default RouterExample