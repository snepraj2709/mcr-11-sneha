import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Watchlater from "./pages/Watchlater";
import Starred from "./pages/Starred";

export default function App() {
  return (
    <div className="min-h-screen p-0 w-full dark:bg-slate-900 dark:text-slate-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </div>
  );
}
