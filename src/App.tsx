import { Suspense } from "react";
import Login from "./pages/Login";
import UserLayout from "./layouts/UserLayout";
import WeeklySheet from "./pages/WeeklySheet";
import { Route, Routes } from "react-router-dom";
import TimeSheet from "./components/Tables/TimeSheet";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<UserLayout />}>
          <Route index element={<TimeSheet />} />
          <Route path="weeklywork/:id" element={<WeeklySheet />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
