import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './app/store.js';
import { ROLES } from './config/roles.js';
import { lazyLoad } from './lazyLoad.js';

import MainLayout from './layout/MainLayout';
import RequireAuth from './layout/RequireAuth.jsx';

const NotFound = lazyLoad('pages/public/notFound/NotFound');
const Login = lazyLoad('pages/auth/login/Login');

const StudentList = lazyLoad('pages/student/studentList/StudentList');

const Home = lazyLoad('pages/user/home/Home');
const Profile = lazyLoad('pages/user/profile/Profile');
const EditUser = lazyLoad('pages/user/editUser/EditUser');

const RaportList = lazyLoad('pages/raport/raportList/RaportList');
const StudentDetail = lazyLoad('pages/student/studentDetail/StudentDetail');

function App() {
  const allRoles = [...Object.values(ROLES)];
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/raport-front-end-demo" element={<MainLayout />}>
            <Route path="login" element={<Login />} />

            <Route element={<RequireAuth roles={allRoles} />}>
              <Route index element={<Home />} />
              <Route path=":username">
                <Route index element={<Profile />} />
                <Route path="edit" element={<EditUser />} />
                <Route
                  path="students"
                  element={<RequireAuth roles={ROLES.mentor} />}
                >
                  <Route index element={<StudentList />} />
                  <Route path=":studentId" element={<StudentDetail />} />
                  <Route path=":username/raports" element={<RaportList />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
