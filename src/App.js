import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

import './App.css';
import ForgetMailPage from './components/forgetPage';
import Welcome from './components/welcomePage';
import SignUp from "./components/signUp";
import Login from "./components/login";
import WhatWeOffer from "./components/whatWeOffer";
import FulltimeJobs from "./components/fulltimeJobs";
import { AuthProvider } from "./AuthContext";
import Account from "./components/account/account";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/home" element={<WhatWeOffer/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/forgot" element={<ForgetMailPage />} />
            <Route exact path="/full-time-jobs" element={<FulltimeJobs />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
