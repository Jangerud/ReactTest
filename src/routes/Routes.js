import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomeView } from "../views/HomeView/HomeView"
import { SignInView } from "../views/SignInView/SignInView"
import { StoreView } from "../views/StoreView/StoreView"
import RoutingPath from "./RoutingPath"


export const Routes = ({ children }) => {
    return (
        <BrowserRouter basename="/ReactTest">
            {children}
            <Switch>
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Routes exact path={RoutingPath.storeView} component={StoreView} />
            </Switch>
        </BrowserRouter>
    )
}