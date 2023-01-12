// Import the Fragment component from reaact
//import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Courses from './pages/Courses';
import CourseView from './components/CourseView';
import Error from './pages/Error';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import './App.css';
import { UserProvider } from './UserContext';

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
         <AppNavbar />
         <Container>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/courses" component={Courses} />
             <Route exact path="/courses/:courseId" component={CourseView} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/logout" component={Logout} />
             <Route exact path="/register" component={Register} />
             <Route component={Error} />
           </Switch>
         </Container>
       </Router>
    </UserProvider>
   
  );
}

export default App;
