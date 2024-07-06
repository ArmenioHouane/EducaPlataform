const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {

 // Dark Mode Colors
 backdarkdm: '#1C1B1E', // Dark Mode Background
 whitextdm: '#FFFFFF', // Dark Mode Text and Title
 cardColorbm: '#25242A', // Dark Mode Card Color
 innerTextColordm: '#575360', // Dark Mode Inner Card Text Color
 darkbtncolordm: '#A688FA', // Dark Mode Button Color
 darklinkcolordm: '#BA9FFB', // Dark Mode Link Color
 darkinnercolordm: '#000000', // Dark Mode Button Inner Text Color
 dropMenulbackdm: '#E1DFFD', // Dark Mode DropDown Background Color
 dropMenudm: '#423F4D', // Dark Mode DropDown Item Color
 bgHoverlm: '#1F75FE', // Hover button
 bgHoverdm: '#87CEEB', // Hover button

 // Light Mode Colors
 backWhitelm: '#F5F4FE', // Light Mode Background
 textWhitelm: '#000008', // Light Mode Text and Title
 cardColorlm: '#FFFFFF', // Light Mode Card Color
 innerTextColorlm: '#000008', // Light Mode Inner Card Text Color
 darkbtncolorlm: '#221A90', // Light Mode Button Color
 darklinkcolorlm: '#2341F8', // Light Mode Link Color
 darkinnercolorlm: '#FFFFFF', // Light Mode Button Inner Text Color
 dropMenulbacklm: '#E1DFFD', // Light Mode DropDown Background Color
 dropMenulm: '#D7D5FC', // Light Mode DropDown Item Color







        navy: '#1E293B', 
      pink: '#f9c6c9', 
      slightlyDarkPink: '#6366F1',  
      lightNavy: '#283c5c',  
      lighterNavy: '#3a4a5c', 
      platinum: '#f5f5f5', 
      lightRed: '#6e363a',  
      red: '#4a1d22',  
      offWhite: '#e8e8e8',  
      lightestRed: '#f9e5e2',
      seaShell: '#FFFFFF', 
      }, 
      
    },
    plugins: [
      
    ],
  },
});
