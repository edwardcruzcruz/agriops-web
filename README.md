# 🌱 AgriOps Web

<p>
Frontend client application for the AgriOps platform, built with <strong>React</strong>, <strong>Vite</strong>, and <strong>TypeScript</strong>.

AgriOps Web integrates with the AgriOps Backend API to provide authentication, protected routes, and agricultural operations management features.

This project follows a scalable, domain-driven architecture with clean separation between UI, business logic, and API layers.
</p>

---

## 🚀 Features

- User authentication (Login & Register)
- Protected routes with token-based access control
- API abstraction layer for backend communication
- Custom React hooks for business logic encapsulation
- Domain-based folder structure (feature-first architecture)
- Modular CSS styling
- Fast development with Vite
- Environment-based configuration
- Reusable shared components (Spinner, Error handling, etc.)

---

## 🛠 Tech Stack

- React 18
- TypeScript (strict mode)
- Vite
- Axios
- React Router
- ESLint

---

## 📁 Project Structure

```bash
src/
 ├── api/                     # Axios configuration & API base setup
 │
 ├── features/
 │    ├── auth/
 │    │    ├── actions/       # API calls (login, register)
 │    │    ├── hooks/         # useLogin, useRegister
 │    │    ├── interfaces/    # Response & request types
 │    │    ├── pages/         # LoginPage, RegisterPage
 │    │    └── validations/   # Form validation schemas
 │    │
 │    └── users/              # User-related domain logic
 │         ├── actions/       # API calls (fetch-users)
 │         ├── components/    # UserList
 │         ├── hooks/         # useApp, useUsers
 │         ├── interfaces/    # Interface & Response
 │         ├── pages/         # UsersPage
 │         └── validations/   # Form validation schemas
 ├── routes/
 │    └── ProtectedRoute.tsx  # Route guard component
 │
 ├── shared/components/       # Reusable UI components
 │    ├── Spinner.tsx
 │    ├── SharedError.tsx
 │    └── CustomHeader.tsx
 │
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

## 🔗 Backend Integration

AgriOps Web connects to:

👉 agriops-api (REST API): https://github.com/edwardcruzcruz/agriops-api

The backend handles:

- Authentication & JWT token issuance

- User management

- Business logic & database operations

- Secure endpoints

---

## 🌐 Environment Configuration

Create a .env file in the root directory:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

An .env.example file is included for reference.

---

## ⚙️ Installation

### 1. Clone the repo:

```bash
git clone https://github.com/your-username/agriops-web.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create .env file with:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

### 4. Run the development server:

```bash
npm run dev
```

---

## 🔐 Authentication Flow

1. User submits login/register form

2. Frontend validates input using schema validation

3. API request sent to agriOps-backend

4. JWT token stored in localStorage

5. Protected routes validate token presence

6. Authenticated user gains access to secured pages

---

## 🧠 Design Decisions

- ✅ Domain-driven folder structure (feature-based)

- ✅ Clear separation between API layer and UI components

- ✅ Business logic encapsulated in custom hooks

- ✅ Type-safe interfaces for API responses

- ✅ Reusable shared components

- ✅ Protected routing abstraction

- ✅ Centralized error handling per domain 

---

## 🔮 Future Improvements

- Role-based authorization (Admin / Operator)

- Token refresh mechanism

- Global API error interceptor

- Redux for state management

- Unit & integration testing (Vitest + Testing Library)

- CI/CD pipeline with GitHub Actions

- Deployment (Netlify / Vercel)

---

## 📌 Author

**Edward Cruz**  
Full Stack Developer | React | TypeScript | REST APIs