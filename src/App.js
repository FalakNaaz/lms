import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';

const Routing = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
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