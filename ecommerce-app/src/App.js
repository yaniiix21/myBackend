import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { UserProvider } from './UserContext';

/* Components */
import AppNavbar from './components/AppNavBar';
import Headings from './components/Headings';

/* Pages */
import Home from './pages/Home';
import Login from './pages/Login';


 function App() {
  // State hook for the user state that's defined for a global scope
  // Initialize an object with properties from the localStorage
  const [user, setUser] = useState({
    // email: localStorage.getItem('email')
    id: null,
    isAdmin: null
  })

  // Function for clearing localStorage on Logout
  const unsetUser = () => {
    localStorage.clear();
  }

  // Used to check if the user information is properly stored upon login and the localStorage information is cleared upon logout
  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
          <Headings />
         <AppNavbar />
         <Container>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/login" component={Login} />
{/*             <Route exact path="/courses" component={Courses} />
             <Route exact path="/courses/:courseId" component={CourseView} />

             <Route exact path="/logout" component={Logout} />
             <Route exact path="/register" component={Register} />*/}
{/*             <Route component={Error} />*/}
           </Switch>
         </Container>
       </Router>
    </UserProvider>
   
  );
}

export default App;
