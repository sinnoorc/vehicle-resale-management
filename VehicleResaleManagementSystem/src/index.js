
import "assets/css/bootstrap.min.css";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "views/Index.js";


import AboutUs from "./views/pages/AboutUs";
import AdminLogin from "./views/pages/AdminLogin";
import FeedBack from "./views/pages/FeedBack";
import OwnerShip from "./views/pages/OwnerShip";
import PopularBike from "./views/pages/PopularBike";
import PopularCar from "./views/pages/PopularCar";
import Search from "./views/pages/Search";
import SignUp from "./views/pages/SignUp";
import ThankYou from "./views/pages/ThankYou";
import UserLogin from "./views/pages/UserLogin";
import UserReg from "./views/pages/UserReg";
import VehicleReg from "./views/pages/VehicleReg";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} exact />
        <Route path="/SignUp" render={(props) => <SignUp {...props} />} exact />
        <Route path="/UserReg" render={(props) => <UserReg {...props} />} exact />
        <Route path="/VehicleReg" render={(props) => <VehicleReg {...props} />} exact />
        <Route path="/UserLogin" render={(props) => <UserLogin {...props} />} exact />
        <Route path="/AdminLogin" render={(props) => <AdminLogin {...props} />} exact />
        <Route path="/AboutUs" render={(props) => <AboutUs {...props} />} exact />
        <Route path="/OwnerShip" render={(props) => <OwnerShip {...props} />} exact />
        <Route path="/FeedBack" render={(props) => <FeedBack {...props} />} exact />
        <Route path="/PopularBike" render={(props) => <PopularBike {...props} />} exact />
        <Route path="/PopularCar" render={(props) => <PopularCar {...props} />} exact />
        <Route path="/Search" render={(props) => <Search {...props} />} exact />
        <Route path="/ThankYou" render={(props) => <ThankYou {...props} />} exact />
        {/* <Redirect to="/index" />
        <Redirect from="/" to="/index" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>
);
