/** @type {import('tailwindcss').Config} */

import type {Config} from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme:{extend:{
       fontFamily:{
            noto:['"Noto Sans"', 'sans-serif'],
        },
  }},
  plugins:[
    
 
  ],
};

export default config;