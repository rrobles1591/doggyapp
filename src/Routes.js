import reactRouter from "react-router";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Watson from "./Watson";
import Red from "./Red";
import Pugsley from "./Pugsley";
import Home from "./Home";

const Routes = () => {
    return (
        <Switch>
        <Route exact path ="/dogs"><Home /></Route>
        <Route exact path="/dogs/watson"><Watson /></Route>
        <Route exact path="/dogs/red"><Red /></Route>
        <Route exact path="/dogs/pugsley">< Pugsley /></Route>
        </Switch>
    );
}

export default Routes; 