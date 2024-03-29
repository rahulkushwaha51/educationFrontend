import { lazy, Suspense } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Loader from "./component/loader/Loader";
const About = lazy(() => import("./component/about/About"));
const Courses = lazy(() => import("./component/courses/Courses"));
const ForgotPassword = lazy(() => import("./component/auth/Forgetpassword"));
const ResetPassword = lazy(() => import("./component/auth/ResetPassword"));
const Lectures = lazy(() => import("./component/courses/Lectures"));
const ChangePassword = lazy(() => import("./component/profile/ChangePassword"));
const UpdateProfile = lazy(() => import("./component/profile/UpdateProfile"));
const Dashboard = lazy(() => import("./component/admin/dashboard/Dashboard"));
const CreateCourse = lazy(() => import("./component/admin/CreateCourse"));
const AdminCourses = lazy(() => import("./component/admin/AdminCourses"));
const Users = lazy(() => import("./component/admin/Users"));
const Chart = lazy(() => import("./component/admin/dashboard/Chart"));
const Subscribe = lazy(() => import("./component/payments/Subscribe"));
const PaymentSuccess = lazy(() =>
  import("./component/payments/PaymentSuccess")
);
const Paymentfail = lazy(() => import("./component/payments/Paymentfail"));
const PageNotfound = lazy(() => import("./component/general/PageNotfound"));
const Contact = lazy(() => import("./component/contact/Contact"));
const Request = lazy(() => import("./component/contact/Request"));
const CourseDetails = lazy(() => import("./component/courses/CourseDetails"));
const Cart = lazy(() => import("./component/cart/Cart"));
const OrderPayment = lazy(() => import("./component/payments/OrderPayment"));
const SignUp = lazy(() => import("./component/auth/SignUp"));
const Profile = lazy(() => import("./component/profile/Profile"));
const Login = lazy(() => import("./component/auth/Login"));

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      <Suspense
        fallback={
          <div>
            {" "}
            <Loader />{" "}
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={isAuthenticated ? <Login /> : <SignUp />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile user={user} /> : <Login />}
          />
          {/* <Route path='/about' element={<About/>} /> */}
          <Route
            path="/changepassword"
            element={isAuthenticated && <ChangePassword />}
          />
          <Route
            path="/updateprofile"
            element={isAuthenticated && <UpdateProfile />}
          />

          <Route path="/courses" element={<Courses />} />
          <Route
            path="/course/:id"
            element={isAuthenticated ? <Lectures user={user} /> : <Login />}
          />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route
            path="/subscribe"
            element={isAuthenticated && <Subscribe user={user} />}
          />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/orderpayment" element={<OrderPayment />} />

          <Route path="/paymentfail" element={<Paymentfail />} />
          {/* admin routes */}
          <Route
            path="/admin/dashboard"
            element={isAuthenticated && <Dashboard />}
          />
          <Route
            path="/admin/createcourse"
            element={isAuthenticated && <CreateCourse />}
          />
          <Route
            path="/admin/courses"
            element={isAuthenticated && <AdminCourses />}
          />
          <Route path="/admin/users" element={isAuthenticated && <Users />} />
          <Route path="/admin/chart" element={isAuthenticated && <Chart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/requestcourse" element={<Request />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/sample" element={<Sample />} /> */}

          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
