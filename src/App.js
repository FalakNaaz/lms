import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './pages/404NotFound/NotFound';

const Routing = () => {
  return (
    <Routes>
        <Route path="" element={<NotFound/>}/>
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
