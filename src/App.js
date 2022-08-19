import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Signup/SignUp';
import AdminDashboard from './pages/Dashboard/Admin Dashboard/AdminDashboard';
import StudentRoute from './components/PrivateRoute/StudentRoute';
import AllCourses from './pages/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';
import Quiz from './pages/Assessment/Assessment';
const Routing = () => {
  return (
    <Routes>
      <Route path="/"
        element={
          <StudentRoute>
            <Dashboard />
          </StudentRoute>
        } />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
        <Route path='/allcourses' element={<AllCourses/>}/>
        <Route path='/assessment' element={<Quiz/>}/>
    </Routes>

  )
}

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;