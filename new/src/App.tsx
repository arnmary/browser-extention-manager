import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { card as initialCards, type CardType } from "./data/cards";

export default function App() {

  const [theme, setTheme ] = useState ("light");

useEffect(() => {
  const storedTheme = localStorage.getItem("theme") || "light";
  setTheme(storedTheme);
  document.documentElement.classList.toggle("dark", storedTheme === "dark");
},[]);

  const toggleTheme =() =>{
    const newTheme = theme === "light" ? "dark" : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme ==="dark");
    localStorage.setItem("theme", newTheme);
  };
    const [activeFilter, setActiveFilter] = useState("All");
  const [cards, setCards] = useState<CardType[]>(initialCards);

    const handleToggle = (id: number) => {
    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

    const handleRemove = (id: number) => {
    setCards(prev => prev.filter(c => c.id !== id));
  };
  return (
    <>
    <div className="h-auto min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] transition-all px-4 py-5 sm:py-10 else-in-out"> 
      <header className="bg-[#FBFDFE] dark:bg-[#21212C]/90 mx-auto w-full sm:w-[83%] flex justify-between items-center rounded-2xl p-4 text-[#09093C] dark:text-[#FBFDFE] shadow-sm">
         <div>
           {theme === "dark" ? (<img src="/logo1.svg" alt="Dark Logo" className="h-11" />
           ) : ( 
          <img src="logo.svg" alt="Light Logo" className="h-11" />
            )}
          </div>
         <button
            aria-label="Toggle theme"
           onClick={toggleTheme}
           className="rounded-2xl p-4 bg-[#C7C7C7]/50 dark:bg-[#2F364B] text-[#09093C] dark:text-[#FBFDFE] shadow-sm cursor-pointer hover:dark:bg-[#545969] hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 hover:ring-offset-[#FBFDFE] dark:hover:ring-offset-[#21212C] transform hover:scale-110  transition-all duration-300 ease-in-out">{theme === 'light' ? <img src="/icon-moon.svg" alt="Moon icon" className="w-5 h-5" /> : <img src="/icon-sun.svg" alt="Sun Icon" className="w-5 h-5"/> }
         </button>
      </header>

        <main className="text-[#09093C] dark:text-white py-6">
           <CardList/>

       </main>
     </div>
      
    </>
  )
}
