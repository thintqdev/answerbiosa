import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Team from './component/Team/Team'
import Introduction from './component/Introduction/Introduction';
import Footer from './component/Footer/Footer';
import Donate from './component/Donate/Donate';
import Blog from './component/Blog/Blog';
import SignUp from './component/Auth/SignUp/SignUp';
import SignIn from './component/Auth/SignIn/SignIn';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route path="/team" component={Team} />
          <Route path="/blog" component={Blog} />
          <Route path="/donate" component={Donate} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
          
        {/* <Footer/> */}
      </Router>
      
    );
    }
}
export default App;
