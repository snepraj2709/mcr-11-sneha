import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "../utils/icons";

export default function Home() {
  const { darkTheme, setDarkTheme } = useTheme();
  return (
    <div className="text-3xl font-bold underline">
      <div className="flex justify-between">
        <p>Home Page</p>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <FaSun className="w-5 h-5 mx-2 my-auto" />
          ) : (
            <FaMoon className="w-5 h-5 mx-2 my-auto" />
          )}
        </button>
      </div>
    </div>
  );
}
