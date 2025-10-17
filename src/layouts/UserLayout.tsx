import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/Routes/ProtectedRoutes";
import LoadingPage from "../pages/LoadingPage";
import AdminHeader from "../components/Navbar/AdminHeader";

const UserLayout = () => {
  return (
    <ProtectedRoute
      allowedRoles={["user", "admin"]}
      redirectTo="/login"
      loadingFallback={<LoadingPage />}
    >
      <AdminHeader />
      <main className="bg-[#F8F8F8] flex p-5 flex-col min-h-screen items-center gap-5">
        <Outlet />
        <div className="bg-white w-[90vw] h-20 flex items-center  p-4 rounded-md shadow-sm text-center justify-center">
          <span className="text-[#6B7280] select-none">
            © 2024 tentwenty. All rights reserved.
          </span>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default UserLayout;
