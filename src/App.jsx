import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("Dark");

  const toggleBtn = () => {
    theme === "Dark" ? setTheme("Light") : setTheme("Dark");
  };

  return (
    <>
      <div className={`bg-black text-white h-screen ${ theme === "Dark" ? "bg-slate-100" : "bg-slate-900"} `}>
        <h1 className={`text-2xl text-center p-2 ${theme === "Light" ? "text-white" : "text-black"}`}> we are create the Dark and Light Theme This type of Project </h1>
        <p className={`text-center py-6 ${theme === "Dark" ? "text-black" : "text-white"}`}>
          {/* The text changes according to the theme */}
          This is {theme === "Dark" ? "Dark Mode" : "Light Mode"}
        </p>
        <button onClick={toggleBtn} className={`p-3 rounded-lg relative left-[45%] ${theme === "Light" ? "bg-white , text-black" : "bg-black , text-white" }`}> {theme} Mode </button>
      </div>
    </>
  );
}

export default App;
