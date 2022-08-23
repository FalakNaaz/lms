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
import Profile from "./pages/Profile/Profile";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({
  typography: {
    fontFamily: [
      "Merriweather"
    ]
  }
})
const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Routes for Student Role */}

      <Route
        path="/"
        element={
          <>
            {
              localStorage.getItem("currUserRole") === "Learner"
                ?
                <StudentRoute>
                  <Dashboard />
                </StudentRoute>
                :
                localStorage.getItem("currUserRole") === "Trainer"
                  ?
                  <TrainerRoute>
                    <TrainerDashboard />
                  </TrainerRoute>
                  :
                  <ClientRoute>
                    <ClientDashboard />
                  </ClientRoute>
            }
          </>
        }
      />
      <Route
        path="/allcourses"
        element={
          <StudentRoute>
            <AllCourses />
          </StudentRoute>
        }
      />
      <Route path="/allcourses/:id"
        element={
          <StudentRoute>
            <Course />
          </StudentRoute>
        } />
      <Route path="/allcourses"
        element={
          <StudentRoute>
            <AllCourses />
          </StudentRoute>
        } />
      <Route path="/assessment"
        element={
          <StudentRoute>
            <QuizPage />
          </StudentRoute>
        } />

      {/* Routes for Trainer Role */}

      {/* <Route path="/trainer-dashboard"
        element={
          <TrainerRoute>
            <TrainerDashboard />
          </TrainerRoute>
        } /> */}
      <Route path="/student-details"
        element={
          <TrainerRoute>
            <StudentDetails />
          </TrainerRoute>
        } />

      {/* Routes for Client Role */}


      <Route path="/allcourse"
        element={
          <ClientRoute>
            <AllCourses />
          </ClientRoute>
        } />
      {/* <Route path="/cd"
        element={
          <ClientRoute>
            <ClientDashboard />
          </ClientRoute>
        } /> */}
      <Route path="/all-student-details"
        element={
          <ClientRoute>
            <AllStudentDetails />
          </ClientRoute>
        } />
      <Route path="/trainer-details"
        element={
          <ClientRoute>
            <TrainerDetails />
          </ClientRoute>
        } />

    </Routes>
  );
};

function App() {
  let loggedIn = localStorage.getItem("currUser");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        {loggedIn &&<Header />}
        <Routing />
        {loggedIn && <Footer />}
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
