type SortingButtonsProps ={
    activeFilter: string;
    setActiveFilter:(filter:string)=>void;
};

export default function SortingButtons({activeFilter, setActiveFilter}: SortingButtonsProps) {
    const buttons = ["All", "Active","Inactive"];

  return (
    <div className="font-[2em] flex flex-row items-center  sm:items-end justify-center sm:justify-end gap-2.5">
      {buttons.map((btn)=>(
        <button
        key={btn}
        className={`rounded-4xl px-3 py-1 shadow-sm cursor-pointer transform hover:scale-110  transition-all duration-300 ease-in-out ${
            activeFilter === btn
            ? "bg-[#c6221A] dark:bg-[#F25C54] text-[#FBFDFE] dark:text-[#09093C] hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 dark:hover:ring-offset-[#21212C] hover:outline-offset-2s shadow-sm shadow-[#545969] hover:shadow-none"
            : "bg-[#FBFDFE] dark:bg-[#2F364B] text-[#09093C] dark:text-[#FBFDFE] hover:dark:bg-[#545969]  hover:ring-2 hover:ring-[#C6221A] dark:hover:ring-[#C6221A] hover:ring-offset-2 hover:ring-offset-[#FBFDFE] dark:hover:ring-offset-[#21212C] hover:outline-offset-2s shadow-sm shadow-[#545969] hover:shadow-none"

        }`}
        onClick={()=>setActiveFilter(btn)}
        >
            {btn}
        </button>
      ))}
    </div>
  )
}
