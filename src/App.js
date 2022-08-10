import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Signup/SignUp';
import { useEffect } from 'react';
import AllCourses from './pages/AllCourses/AllCourses';


const Routing = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/allcourses' element={<AllCourses/>}/>
    </Routes>

  )
}

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;