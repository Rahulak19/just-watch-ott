import './App.css';
import HomePage from "./pages/homepage/HomPage"
import Login from "./pages/login/Login"
import SignUpScreen from "./pages/signInScreen/SignInScreen"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const user=null;
  return (
    <div className="App">
     <Router>
      <Routes>
        {/* <Route path='/' element={!user?(<HomePage />):(<Login />)}></Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUpScreen />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
