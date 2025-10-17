# 🧾 Timesheet Management App

A simple **React** application with mock API integration, authentication, and timesheet tracking, built using **ShadCN UI**, **React Hook Form**, and **JSON Server**.
This project demonstrates **API integration**, **reusable components**, and robust **form handling** using modern React patterns.

---

## 🚀 Features

- **🔐 Login System** (with session storage)
- **📅 Weekly Timesheet Overview** (view, create, update entries)
- **⏰ Timesheet Entries per day** with work details (modal only)
- **🧩 Reusable UI Components** built using **ShadCN UI**
- **💾 Mock REST API** powered by **JSON Server**
- **🧠 Form Validation** using **Yup** + **React Hook Form**

---

## 🛠️ Technology Stack

| Technology                   | Purpose                         |
| :--------------------------- | :------------------------------ |
| ⚛️ **React**                 | Frontend UI framework           |
| 🧱 **ShadCN UI**             | Component styling and theming   |
| 📘 **TypeScript**            | Type safety and better tooling  |
| 📦 **JSON Server**           | Mock backend REST API           |
| 🔐 **React Hook Form + Yup** | Form handling & validation      |
| ⚙️ **Context API**           | Authentication state management |

---

## 📂 Project Structure

src/├── components/│ ├── common/│ │ └── CustomSelect.tsx # Reusable dropdown select component│ ├── ui/│ │ ├── InputBox.tsx # Reusable input field (potentially controlled)│ │ └── checkbox.tsx # ShadCN checkbox integrated with RHF│ └── Login/│ ├── LoginForm.tsx # Login form component│ └── loginSchema.ts # Validation schema for the login form│├── context/│ └── AuthContext.tsx # React Context provider for authentication state│├── utils/│ ├── formatDateRange.ts # Format week date range for display│ ├── formatShortDate.ts # Convert date string to "Sept 29"│ └── dateRangeOptions.ts # Dropdown data for the week filter│└── data/└── db.json # JSON Server mock data (users, timesheets)

---

## 🧑‍💻 Getting Started

1️⃣ **Clone the repository**

git clone [https://github.com/your-username/timesheet-app.git](https://github.com/your-username/timesheet-app.git)
cd timesheet-app

2️⃣ **Install dependencies**

npm install

3️⃣ **Start the mock API (JSON Server)**

Make sure you have a script in your package.json like "mock-api": "json-server --watch data/db.json --port 5000".

npm run mock-api

4️⃣ **Start the React app**

npm run dev
OR use 'npm start' if configured with Create React App

## 🔑 Authentication Flow

User credentials are validated against mock users data in db.json.

A base64-encoded token is generated upon successful login.

The token and user data are stored in sessionStorage.

The useAuth() hook provides the current user, login(), and logout() functions across the application via the Context API.

## 📊 Mock Data Example

Users Example

{
"id": 1,
"email": "john@gmail.com",
"password": "1234",
"name": "John Doe",
"token": "am9obkBnbWFpbC5jb206MTIzNA=="
}

Timesheets Example
{
"id": 1,
"week": "2025-W40",
"userId": 1,
"totalHours": 38,
"dateAssigned": "2025-09-30",
"deadlineDate": "2025-10-06",
"status": "completed"
}

Function,Description
| Function | Description |
| ----------------------------- | ---------------------------------------------- |
| `formatDateRange(start, end)` | Converts two dates into a readable week range |
| `formatShortDate(date)` | Converts `"2025-09-29"` → `"Sept 29"` |
| `dateRangeOptions` | Provides list of predefined date range options |

## 📝 Assumptions and Notes

| Area                | Description                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **API**             | JSON Server is used for the entire backend. Data operations (GET) are against the flat `db.json` file.                                                  |
| **Security**        | Authentication is token-based but mock-level. Stored in `sessionStorage` (not as secure as HTTP-only cookies).              |
| **Timesheet Logic** | The weekly overview is filtered based on a hardcoded list of week ranges provided by the `dateRangeOptions` utility function, not a dynamic calculation of all available data. |
| **UI/UX**           | Timesheet entries (the modal details) are only mock-integrated; the core focus was on the weekly overview and the login/form flow.                                             |

## ⏱️ Feature / Area Effort Estima

| Feature / Area                                         | Estimated Time            | Notes                                                                           |
| ------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------- |
| Setup & Boilerplate (React, TS, ShadCN)                | 1 hour                    | Initial project structure and library setup.                                    |
| Auth Context & Logic (Login, Context, Session Storage) | 2 hours                   | Core authentication flow and hook implementation.                               |
| Form Implementation (Login Form, RHF, Yup)             | 2.5 hours                 | Designing the login form and integrating validation.                            |
| Weekly Timesheet Overview (Layout, Fetching)           | 4 hours                   | Designing the main table, data fetching, and displaying weekly totals.          |
| Utility Functions & Data (Dates, Mock API)             | 1 hour                    | Creating helper functions (`formatDateRange`, `db.json` structure).             |
| Refinement & Documentation (README, Components)        | 1.5 hours                 | Final polish, creating reusable components (`CustomSelect`), and documentation. |
| **TOTAL**                                              | **≈ 12 hours (1.5 days)** | Overall effort estimate for a complete prototype.                               |
