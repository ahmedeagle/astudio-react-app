# React Users & Products App

## 🚀 Overview
A professional and optimized React application for managing users and products with **pagination, filtering, and a reusable table component**. The app consumes data from [DummyJSON API](https://dummyjson.com/docs) and follows **best practices in UI/UX, performance, and architecture**.

---

## 📦 Features
- **Dynamic Routing**: `/users` and `/products` pages.
- **Reusable Components**: Optimized `Table` component for displaying data.
- **Pagination & Filtering**: Smart API calls with a smooth user experience.
- **Optimized State Management**: `useMemo` for performance and minimal re-renders.
- **Better UX**: Loading states, hover effects, and accessible buttons.
- **API Error Handling**: Ensures a smooth experience in case of failures.
- **Enhanced UI Animations**: Smooth transitions with **Framer Motion**.
- **SEO Optimized**: Improved metadata and page performance.
- **Lazy Loading**: Uses `React.lazy()` and `Suspense` for better performance.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/react-users-products.git
cd react-users-products
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```
Application will run at **http://localhost:5173**.

---

## 📂 Folder Structure
```
/my-react-app
 ├── public/                  # Static assets
 ├── src/
 │   ├── assets/              # Images, icons, fonts
 │   ├── components/          # Reusable UI components (Table, Loader)
 │   ├── context/             # Context API files (global state management)
 │   ├── pages/               # Feature-based pages (Users, Products)
 │   ├── services/            # API calls (Axios instance)
 │   ├── styles/              # Global styles
 │   ├── App.jsx              # Main App component
 │   ├── main.jsx             # Entry point
 ├── .gitignore               # Ignore unnecessary files
 ├── tailwind.config.js       # Tailwind CSS configuration
 ├── package.json             # Dependencies & scripts
 ├── README.md                # Documentation
```

---

## 🔗 API Reference
**Base URL:** `https://dummyjson.com`

- **Fetch Users:** `GET /users?limit={limit}&skip={skip}`
- **Fetch Products:** `GET /products?limit={limit}&skip={skip}`

---

## 🎨 UI/UX Enhancements
### **Animations & Smooth Transitions**
We use **Framer Motion** for a polished user experience.
- **Install Framer Motion:**
  ```sh
  npm install framer-motion
  ```
- **Example Animation:**
  ```jsx
  import { motion } from "framer-motion";
  
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <h1 className="text-xl font-bold mb-4">Products</h1>
  </motion.div>
  ```

### **Lazy Loading for Performance**
We optimize loading times using `React.lazy()` and `Suspense`.
- **Example:**
  ```jsx
  import { lazy, Suspense } from "react";
  const UsersPage = lazy(() => import("./pages/Users/UsersPage"));
  ```

---

## 🛡️ Security & Best Practices
- **Protected API Calls:** Axios instance ensures safe and efficient requests.
- **Error Handling:** Centralized error management prevents UI crashes.
- **SEO Optimization:** Metadata ensures better visibility on search engines.

---

## 👨‍💻 Author
- **Ahmed Emam - ahmed.emam.dev@gmail.com**

---

## 🏆 Contributions
Feel free to fork, star, and submit pull requests!
 #   a s t u d i o - r e a c t - a p p  
 