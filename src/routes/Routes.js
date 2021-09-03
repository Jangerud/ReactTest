import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomeView } from "../views/HomeView/HomeView"
import { SignInView } from "../views/SignInView/SignInView"

export const Routes = ({ children }) => {
    return (
        <BrowserRouter basename="/ReactTest">
            {children}
            <Switch>
                <Route exact path={'/signin'} component={SignInView} />
                <Route path={'/'} component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}