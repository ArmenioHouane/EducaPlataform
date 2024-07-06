import React, { useState } from 'react';
import { IconButton } from "@material-tailwind/react"; // Assuming you're using Material Tailwind for other components
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Importing SunIcon and MoonIcon from Heroicons

interface ThemePluginProps {
  initialTheme: 'light' | 'dark'; // Define o tipo inicial do tema
}

const ThemePlugin: React.FC<ThemePluginProps> = ({ initialTheme }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  const handleThemeSwitcher = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <IconButton
      onClick={handleThemeSwitcher}
      color="white"
    >
      {theme === 'light' ? (
        <SunIcon className="h-6 w-6" /> // Sun icon for light theme
      ) : (
        <MoonIcon className="h-6 w-6" /> // Moon icon for dark theme
      )}
    </IconButton>
  );
};

export default ThemePlugin;
