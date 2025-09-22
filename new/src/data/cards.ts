export type CardType = {
    id: number;
    title: string;
    description: string;
    icon: string;
    active: boolean;
};
 
export const card: CardType[] =[
    {
   id: 1,
    title: "DevLens",
    description: "Quicky inspect page layouts and visualize element boundaries.",
    icon: "/logo-devlens.svg",
    active: true,
  },
  {
    id: 2,
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    icon: "/logo-style-spy.svg",
    active: true,
    
  },
  {
    id: 3,
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    icon: "/logo-speed-boost.svg",
    active: false,
  },
    {
    id: 4,
    title: "JSONWizard",
    description: "Formats,validates, and prettifies JSON responses in-browser.",
    icon: "/logo-json-wizard.svg",
    active: true,
  },
      {
    id: 5,
    title: "TabMaster Pro",
    description: "Organized browser tabs intro groups and sessions.",
    icon: "/logo-tab-master-pro.svg",
    active: true,
  },
     {
    id: 6,
    title: "ViewportBuddy",
    description: "Simulates varios screen resolutions directly within the browser.",
    icon: "/logo-viewport-buddy.svg",
    active: false,
  },
     {
    id: 7,
    title: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debuging.",
    icon: "/logo-markup-notes.svg",
    active: true,
  },
     {
    id: 8,
    title: "GridGuides",
    description: "Overlay customizable grids and aligment guides on any webpage.",
    icon: "/logo-grid-guides.svg",
    active: false,
  },
     {
    id: 9,
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    icon: "/logo-palette-picker.svg",
    active: true,
  },
     {
    id: 10,
    title: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    icon: "/logo-link-checker.svg",
    active: true,
  },
     {
    id: 11,
    title: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    icon: "/logo-dom-snapshot.svg",
    active: false,
  },
     {
    id: 12,
    title: "ConsolePlus",
    description: "Enhansed developer console with advanced filtering and loading.",
    icon: "/logo-console-plus.svg",
    active: true,
  },
]