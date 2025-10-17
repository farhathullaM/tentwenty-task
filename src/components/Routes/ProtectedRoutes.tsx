import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAccessToken } from "../../services/tokenServices";


/**
 * ProtectedRoute (React Router v6)
 *
 * Guards a group of routes behind authentication and optional role checks.
 * Uses `useAuth` for user state, and `getAccessToken()` for checking token.
 *
 * Props:
 * - redirectTo?: string = "/login" — where to send unauthenticated users
 * - allowedRoles?: string[] — if provided, user must have at least one of these roles
 * - whenUnauthorized?: string = "/403" — where to send authenticated-but-unauthorized users
 * - loadingFallback?: React.ReactNode — what to render while auth is loading
 *
 * Usage:
 *
 * <Route element={<ProtectedRoute allowedRoles={["admin"]}/> }>
 *   <Route path="/admin" element={<AdminPanel/>} />
 * </Route>
 */

type ProtectedRouteProps = {
  redirectTo?: string;
  whenUnauthorized?: string;
  allowedRoles?: string[];
  loadingFallback?: React.ReactNode;
  children?: React.ReactNode; // 👈 allow children
};

export default function ProtectedRoute({
  redirectTo = "/login",
  whenUnauthorized = "/403",
  allowedRoles,
  loadingFallback,
  children,
}: ProtectedRouteProps) {
  const location = useLocation();
  const { user, loading } = useAuth();
  const token = getAccessToken();

  if (loading) {
    return (
      loadingFallback || (
        <div className="min-h-[40vh] grid place-items-center">
          <div className="animate-pulse text-sm opacity-70">
            Checking access…
          </div>
        </div>
      )
    );
  }

  if (!user || !token) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const userRole = user?.role || user?.role?.[0];
    const ok = allowedRoles.some((role) =>
      Array.isArray(user?.role) ? user.role.includes(role) : userRole === role
    );
    if (!ok) {
      return (
        <Navigate to={whenUnauthorized} replace state={{ from: location }} />
      );
    }
  }

  return <>{children || <Outlet />}</>;
}

/**
 * Optional helpers for inline gating (component-level):
 */
export function RequireAuth({
  children,
  redirectTo = "/login",
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) {
  const location = useLocation();
  const { user, loading } = useAuth();
  const token = getAccessToken();
  if (loading) return null; // or a spinner
  if (!user || !token)
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  return children;
}

export function RequireRole({
  children,
  roles = ["admin"],
  whenUnauthorized = "/403",
}: {
  children: React.ReactNode;
  roles?: string[];
  whenUnauthorized?: string;
}) {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return null; // or a spinner
  const userRole = user?.role;
  const ok = roles.some((r) =>
    Array.isArray(user?.role) ? user.role.includes(r) : userRole === r
  );
  if (!ok)
    return (
      <Navigate to={whenUnauthorized} replace state={{ from: location }} />
    );
  return children;
}
