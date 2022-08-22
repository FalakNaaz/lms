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
import TrainerDashboard from "./pages/Dashboard/Trainer Dashboard/TrainerDashboard";
import QuizPage from "./pages/Quiz/QuizPage";
import TrainerRoute from "./components/PrivateRoute/TrainerRoute";
import ClientDashboard from "./pages/Dashboard/Client-Dashboard/ClientDashboard";
import AllStudentDetails from "./pages/Dashboard/Client-Dashboard/AllStudentDetails";
import TrainerDetails from './pages/Dashboard/TrainerDetails'
import ClientRoute from "./components/PrivateRoute/ClientRoute";
import CourseDetails from "./pages/Dashboard/CourseDetails";
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

      <Route path="/trainer-dashboard" element={
        <TrainerRoute>
          <TrainerDashboard />
        </TrainerRoute>
      } />
      <Route path="*" element={<NotFound />} />
      <Route path="/student-details" element={
        <TrainerRoute>
          <StudentDetails />
        </TrainerRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/allcourses"
        element={
          <StudentRoute>
            <AllCourses />
          </StudentRoute>
        }
      />
      <Route path="/allcourses/:id" element={
        <StudentRoute>
          <Course Page />
        </StudentRoute>
      } />
      <Route path="/allcourses" element={
        <StudentRoute>
          <AllCourses />
        </StudentRoute>
      } />
      <Route path="/assessment" element={
        <StudentRoute>
          <QuizPage />
        </StudentRoute>
      } />
      <Route path="/cd" element={
        <ClientRoute>
          <ClientDashboard />
        </ClientRoute>
      } />
      <Route path="/all-student-details" element={
        <ClientRoute>
          <AllStudentDetails />
        </ClientRoute>
      } />
      <Route path="/trainer-details" element={
        <ClientRoute>
          <TrainerDetails />
        </ClientRoute>
      } />
      <Route path="/course-details" element={
        <ClientRoute>
          <CourseDetails />
        </ClientRoute>
      } />

    </Routes>
  );
};

function App() {
  let loggedIn = localStorage.getItem("currUser");
  // useEffect(() => {
  //   // window.location.reload()

  // }, [])

  return (
    <div>
      <Router>
        {loggedIn && <Header />}
        <Routing />
        {loggedIn && <Footer />}
      </Router>
    </div>
  );
}

export default App;
