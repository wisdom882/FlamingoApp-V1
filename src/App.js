import './App.css';

import FirebaseProvider from "./context/firebaseContext"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route,Switch,Redirect} from "react-router-dom"
import Home from './admin/Home.component'
import NotFound from './admin/Notfound.component'
import Header from './components/header/header.component'
import UnAuthenticatedHome from './pages/unauthenticatedhome/unauthenticatedhome.component'
import footer from './components/footer/footer.component'
//import CheckIfUserIsLoggedIn from './components/userManagement';


function App() {
 
  return (
    <FirebaseProvider>
      <div className="App">
      <div className="background"></div>
        <Header/>
        <Switch>
          <Route path="/userhome" component={Home}/>
          <Route path="/not-found" component={NotFound}/>
          <Route exact path="/" component={UnAuthenticatedHome} />
          <Redirect to="/not-found"/>
        </Switch>
        <footer />
      </div>
    </FirebaseProvider>
    
  );
}

export default App;
