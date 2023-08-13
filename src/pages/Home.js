import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/DataContext";

import { FaSun, FaMoon } from "../utils/icons";

export default function Home() {
  const { state } = useData();
  const allMovies = state?.allMovies;
  const classes =
    "bg-slate-100 shadow-md p-2 rounded-full h-8 object-cover text-sm font-medium mx-1 my-auto cursor-pointer";

  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <div className="flex flex-col col-span-8">
          <h2 className="font-bold text-2xl ml-4 pt-4 md:hidden">Explore</h2>
          <Feed list={state?.allMovies} />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
