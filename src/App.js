import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404NotFound/NotFound";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/Signup/SignUp";
import StudentDetails from "./pages/Dashboard/Trainer Dashboard/StudentDetails";
import StudentRoute from "./components/PrivateRoute/StudentRoute";
import AllCourses from "./pages/AllCourses/AllCourses";
import Course from "./pages/Course/Course";
import Footer from "./components/Footer/Footer";
import TrainerDashboard from './pages/Dashboard/Trainer Dashboard/TrainerDashboard';
import QuizPage from './pages/Quiz/QuizPage';
const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <StudentRoute>
            <Dashboard />
          </StudentRoute>
        }
      />

      <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/student-details" element={<StudentDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/allcourses' element={
        <StudentRoute>
          <AllCourses />
        </StudentRoute>} />
      <Route path='/allcourses/:id' element={<Course Page/>} />
    </Routes>
  );
};

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
