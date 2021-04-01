import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

const Recipes = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const Main_router = () => {
    return (
        <div>
            <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                      
                    <Route path="/recipes" component={Recipes} />    
                    
                    <Route path="/About" component={Recipes} />    
                </Switch>
        </div>
    );
};

export default Nav;