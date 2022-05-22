import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Students from "./Pages/Students/Students";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TeachingStaff from "./Pages/TeachingStaff/TeachingStaff";
import AcademicCalender from "./Pages/AcademicCalender/AcademicCalender";
import Announcement from "./Pages/Announcements/Announcement";
import AccountSettings from "./Pages/AccountSettings/AccountSettings";
import { Provider } from "react-redux";
import store from "./store/store";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="studentProfile" element={<StudentProfile />} />
          <Route path="studentProfile/:username" element={<StudentProfile />} />
          <Route path="staffs" element={<TeachingStaff />} />
          <Route path="academic-Calender" element={<AcademicCalender />} />
          <Route path="announcements" element={<Announcement />} />
          <Route path="settings" element={<AccountSettings />} />
        </Routes>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
