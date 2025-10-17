# 🧾 Timesheet Management App

A simple **React** application with mock API integration, authentication, and timesheet tracking, built using **ShadCN UI**, **React Hook Form**, and **JSON Server**.
This project demonstrates **API integration**, **reusable components**, and robust **form handling** using modern React patterns.

---

## 🚀 Features

* **🔐 Login System** (with session storage)
* **📅 Weekly Timesheet Overview** (view, create, update entries)
* **⏰ Timesheet Entries per day** with work details (modal only)
* **🧩 Reusable UI Components** built using **ShadCN UI**
* **💾 Mock REST API** powered by **JSON Server**
* **🧠 Form Validation** using **Yup** + **React Hook Form**

---

## 🛠️ Technology Stack

| Technology               | Purpose                         |
| :----------------------- | :------------------------------ |
| ⚛️ **React** | Frontend UI framework           |
| 🧱 **ShadCN UI** | Component styling and theming   |
| 📘 **TypeScript** | Type safety and better tooling  |
| 📦 **JSON Server** | Mock backend REST API           |
| 🔐 **React Hook Form + Yup** | Form handling & validation      |
| ⚙️ **Context API** | Authentication state management |

---

## 📂 Project Structure

This is a well-structured and detailed README.md file! The issues are minor, primarily focusing on consistency, clarity of commands, and standard conventions.Here are the suggested fixes, along with explanations:Suggested Fixes1. Consistency in Running JSON ServerThe instructions under "🧑‍💻 Getting Started" give two different ways to start the mock API. You should use the one that corresponds to what would typically be a script in package.json.Old CommandSuggested ChangeRationalenpx json-server --watch data/db.json --port 5000Remove this line.It's redundant if a script is provided.npm run mock-apiKeep this line, but ensure the package.json has the correct script.Using npm run <script-name> is standard practice and cleaner for users.2. Clarity for Starting the React AppThe command to start the React app should be standard. While npm run dev is common in newer setups (like Vite), npm start or a more explicit command is sometimes used. Assuming a standard React setup, you should clarify this.Old CommandSuggested ChangeRationalenpm run devChange to npm start (or if you are certain it's npm run dev, keep it, but add a note).npm start is the most common command for a standard Create React App (CRA) project. If using Vite, npm run dev is correct. Let's assume npm start for broader compatibility unless you know the specific build tool.3. Improving File/Folder DescriptionsSome file descriptions could be slightly clearer for a developer new to the project.Old DescriptionSuggested ChangeRationaleInputBox.tsx # Input field componentInputBox.tsx # Reusable input field (potentially controlled)Adding "controlled" hints at how it's used with React Hook Form.AuthContext.tsx # Auth provider and login logicAuthContext.tsx # React Context provider for authentication stateUsing "React Context provider" is more explicit.4. Updating the Author SectionWhile the author section is fine, using a smaller header or just text makes it less disruptive.Old SectionSuggested ChangeRationale🧡 AuthorChange to a plain line or a brief statement.Headers should generally be reserved for main sections.✅ Fixed README.mdHere is the revised README.md incorporating the fixes:Markdown# 🧾 Timesheet Management App

A simple **React** application with mock API integration, authentication, and timesheet tracking, built using **ShadCN UI**, **React Hook Form**, and **JSON Server**.
This project demonstrates **API integration**, **reusable components**, and robust **form handling** using modern React patterns.

---

## 🚀 Features

* **🔐 Login System** (with session storage)
* **📅 Weekly Timesheet Overview** (view, create, update entries)
* **⏰ Timesheet Entries per day** with work details (modal only)
* **🧩 Reusable UI Components** built using **ShadCN UI**
* **💾 Mock REST API** powered by **JSON Server**
* **🧠 Form Validation** using **Yup** + **React Hook Form**

---

## 🛠️ Technology Stack

| Technology               | Purpose                         |
| :----------------------- | :------------------------------ |
| ⚛️ **React** | Frontend UI framework           |
| 🧱 **ShadCN UI** | Component styling and theming   |
| 📘 **TypeScript** | Type safety and better tooling  |
| 📦 **JSON Server** | Mock backend REST API           |
| 🔐 **React Hook Form + Yup** | Form handling & validation      |
| ⚙️ **Context API** | Authentication state management |

---

## 📂 Project Structure

src/├── components/│   ├── common/│   │   └── CustomSelect.tsx       # Reusable dropdown select component│   ├── ui/│   │   ├── InputBox.tsx           # Reusable input field (potentially controlled)│   │   └── checkbox.tsx           # ShadCN checkbox integrated with RHF│   └── Login/│       ├── LoginForm.tsx          # Login form component│       └── loginSchema.ts         # Validation schema for the login form│├── context/│   └── AuthContext.tsx            # React Context provider for authentication state│├── utils/│   ├── formatDateRange.ts         # Format week date range for display│   ├── formatShortDate.ts         # Convert date string to "Sept 29"│   └── dateRangeOptions.ts        # Dropdown data for the week filter│└── data/└── db.json                    # JSON Server mock data (users, timesheets)

---

## 🧑‍💻 Getting Started

1️⃣ **Clone the repository**

```bash
git clone [https://github.com/your-username/timesheet-app.git](https://github.com/your-username/timesheet-app.git)
cd timesheet-app

2️⃣ Install dependencies

npm install

3️⃣ Start the mock API (JSON Server)

Make sure you have a script in your package.json like "mock-api": "json-server --watch data/db.json --port 5000".

npm run mock-api

4️⃣ Start the React app

npm run dev 
# OR use 'npm start' if configured with Create React App

🔑 Authentication Flow
User credentials are validated against mock users data in db.json.

A base64-encoded token is generated upon successful login.

The token and user data are stored in sessionStorage.

The useAuth() hook provides the current user, login(), and logout() functions across the application via the Context API.

📊 Mock Data Example
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
"formatDateRange(start, end)",Converts two dates into a readable week range
formatShortDate(date),"Converts ""2025-09-29"" → ""Sept 29"""
dateRangeOptions,Provides list of predefined date range options