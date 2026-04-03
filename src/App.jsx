import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import RegisterDonor from "./pages/auth/RegisterDonor";
import FacultyRegister from "./pages/auth/FacultyRegister";

import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import DonorDashboard from "./pages/donor/DonorDashboard";
import DonorCampsList from "./pages/donor/DonorCampsList";
import DonorDonationHistory from "./pages/donor/DonorDonationHistory";
import DonorProfile from "./pages/donor/DonorProfile";

import BloodCamps from "./pages/bloodlab/BloodCamps";
import BloodlabDashboard from "./pages/bloodlab/BloodlabDashboard";
import BloodLabDonor from "./pages/bloodlab/BloodLabDonor";
import BloodStock from "./pages/bloodlab/BloodStock";
import LabManageRequests from "./pages/bloodlab/LabManageRequests";
import LabProfile from "./pages/bloodlab/LabProfile";

import DonorDirectory from "./pages/hospital/DonorDirectory";
import HospitalBloodStock from "./pages/hospital/HospitalBloodStock";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import HospitalRequestBlood from "./pages/hospital/HospitalRequestBlood";
import HospitalRequestHistory from "./pages/hospital/HospitalRequestHistory";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/register/donor" element={<RegisterDonor />} />
        <Route path="/register/facility" element={<FacultyRegister />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/donor/camps" element={<DonorCampsList />} />
        <Route path="/donor/history" element={<DonorDonationHistory />} />
        <Route path="/donor/profile" element={<DonorProfile />} />

        <Route path="/bloodcamps" element={<BloodCamps />} />
        <Route path="/bloodlab/dashboard" element={<BloodlabDashboard />} />
        <Route path="/bloodlab/donors" element={<BloodLabDonor />} />
        <Route path="/bloodlab/stock" element={<BloodStock />} />
        <Route path="/bloodlab/requests" element={<LabManageRequests />} />
        <Route path="/bloodlab/profile" element={<LabProfile />} />

        <Route path="/donors" element={<DonorDirectory />} />
        <Route path="/hospital/stock" element={<HospitalBloodStock />} />
        <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
        <Route path="/hospital/request" element={<HospitalRequestBlood />} />
        <Route path="/hospital/history" element={<HospitalRequestHistory />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;