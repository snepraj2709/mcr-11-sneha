import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen p-0 w-full dark:bg-slate-900 dark:text-slate-50">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
