import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="overflow-hidden lg:max-w-6xl grow mx-auto">
        <Feed list={state?.allMovies} />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
