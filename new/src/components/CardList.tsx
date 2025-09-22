import { useState } from "react";
import SortingButtons from "./SortingButtons";
import Card from "./Card";
import {card as initialCards, type CardType} from "../data/cards";

export default function CardList() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [cards, setCards] =useState<CardType[]>(initialCards);
    const handleToggle =(id: number) =>{
setCards(prev =>
    prev.map(c =>(c.id === id ? { ...c, active: !c.active} : c))
);
    };

    const handleRemove = (id:number) =>{
        setCards(prev => prev.filter(c => c.id !==id));
    };

    const filteredCards = cards.filter(c=>{
        if(activeFilter === "Active") return c.active;
        if(activeFilter === "Inactive") return !c.active;
        return true;
    })
  return (
    <>
    <div className="ww-ful sm:w-[83%] mx-auto">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 mb-6">
             <h1 className="font-noto font-bold text-4xl sm:text-5xl text-center">
          Extension List
             </h1>
        <SortingButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            card={card}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        ))}
      </div>
      </div>
    </>
  )
}
