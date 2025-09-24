import type { CardType } from "../data/cards";

type CardProps = {
  card: CardType;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function Card({ card, onToggle, onRemove }: CardProps) {
  const enabled = card.active;

  return (
    <div className="p-5 rounded-3xl  bg-white dark:bg-[#21212C]/90 dark:text-white flex flex-col justify-between gap-5  shadow-sm shadow-[#545969]">
      <div className="flex items-center gap-4 md:flex-wrap">
        <img src={card.icon} alt={`${card.title} icon`} className="w-14 h-14" />
        <div className="flex flex-col flex-wrap w-60">
          <h2 className="font-bold text-2xl">{card.title}</h2>
        <p className="text-base text-[#545969] dark:text-[#C7C7C7]">{card.description}</p>
        </div>
        
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => onRemove(card.id)}
          className="px-3 py-1.5 rounded-4xl bg-[#FBFDFE] border-1 border-[#545969]  dark:bg-[#21212C]/90 text-[#09093C] dark:text-[#C7C7C7] text-base cursor-pointer shadow-sm  hover:bg-[#C7C7C7]/50 hover:dark:bg-[#545969] hover:border-[#C7C7C7]/50 hover:dark:border-[#545969] hover:dark:text-[#FBFDFE] hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 hover:ring-offset-[#FBFDFE] dark:hover:ring-offset-[#21212C] transform hover:scale-110  transition-all duration-300 ease-in-out"
        >
        Remove
        </button>

        <button
          type="button"
          aria-label="switch"
          className={`relative w-9 h-5 rounded-full transition-colors mt-2  duration-300  ${
            enabled ? "cursor-pointer  bg-[#C6221A] dark:bg-[#F25C54] shadow-sm hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 hover:ring-offset-[#FBFDFE] dark:hover:ring-offset-[#21212C]" : "bg-[#C7C7C7] dark:bg-[#545969] cursor-pointer shadow-sm shadow-[#545969] hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 hover:ring-offset-[#FBFDFE] dark:hover:ring-offset-[#21212C]"
          }`}
          onClick={() => onToggle(card.id)} 
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-[#FBFDFE] rounded-full shadow-md transform transition-transform duration-300  ${
              enabled ? "translate-x-4" : "translate-x-0 "
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}

