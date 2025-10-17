🧾 Timesheet Management App

A simple React application with mock API integration, authentication, and timesheet tracking, built using ShadCN UI, React Hook Form, and JSON Server.
This project demonstrates API integration, reusable components, and form handling using modern React patterns.


🚀 Features

🔐 Login System (with session storage)

📅 Weekly Timesheet Overview (view, create, update entries)

⏰ Timesheet Entries per day with work details(modal only)

🧩 Reusable UI Components built using ShadCN UI

💾 Mock REST API powered by JSON Server

🧠 Form Validation using Yup + React Hook Form


| Technology               | Purpose                         |
| ------------------------ | ------------------------------- |
| ⚛️ React                 | Frontend UI framework           |
| 🧱 ShadCN UI             | Component styling               |
| 📘 TypeScript            | Type safety                     |
| 📦 JSON Server           | Mock backend API                |
| 🔐 React Hook Form + Yup | Form handling & validation      |
| ⚙️ Context API           | Authentication state management |


📂 Project Structure

src/
├── components/
│   ├── common/
│   │   └── CustomSelect.tsx       # Reusable dropdown select
│   ├── ui/
│   │   ├── InputBox.tsx           # Input field component
│   │   └── checkbox.tsx           # ShadCN checkbox
│   └── Login/
│       ├── LoginForm.tsx          # Login form component
│       └── loginSchema.ts         # Validation schema
│
├── context/
│   └── AuthContext.tsx            # Auth provider and login logic
│
├── utils/
│   ├── formatDateRange.ts         # Format week date range
│   ├── formatShortDate.ts         # Convert date to "Sept 29"
│   └── dateRangeOptions.ts        # Dropdown data for date range filter
│
└── data/
    └── db.json                    # JSON Server mock data (users, timesheets)


🧑‍💻 Getting Started
1️⃣ Clone the repository

git clone https://github.com/your-username/timesheet-app.git
cd timesheet-app


2️⃣ Install dependencies
npm install

3️⃣ Start the mock API (JSON Server)
npx json-server --watch data/db.json --port 5000
npm run mock-api

4️⃣ Start the React app
npm run dev


🔑 Authentication Flow

User credentials are validated against mock users data in db.json

A token is generated 

Token and user data are stored in sessionStorage

useAuth() hook provides user, login(), and logout() across the app

📊 Mock Data Example

Users
{
  "id": 1,
  "email": "john@gmail.com",
  "password": "1234",
  "name": "John Doe",
  "token": "am9obkBnbWFpbC5jb206MTIzNA=="
}

Timesheets
{
  "id": 1,
  "week": "2025-W40",
  "userId": 1,
  "totalHours": 38,
  "dateAssigned": "2025-09-30",
  "deadlineDate": "2025-10-06",
  "status": "completed"
}


💡 Reusable Components

CustomSelect — Dropdown built with ShadCN UI

InputBox — Controlled input for forms

Checkbox — ShadCN checkbox integrated with React Hook Form

🧰 Utility Functions
| Function                      | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `formatDateRange(start, end)` | Converts two dates into a readable week range  |
| `formatShortDate(date)`       | Converts `"2025-09-29"` → `"Sept 29"`          |
| `dateRangeOptions`            | Provides list of predefined date range options |



🧡 Author
Farhathulla Menayath
