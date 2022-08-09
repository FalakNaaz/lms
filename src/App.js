import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './pages/404NotFound/NotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';

const Routing = () => {
  return (
    <Routes>
        <Route path="" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>

  )
}

function App() {
  return (
    <Router>
        <Routing/>
    </Router>
  );
}

export default App;
