// ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {Button, Tooltip} from '@nextui-org/react'
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip content='Switch theme' showArrow={true} color="foreground" >

    <Button
    variant='light'
      onPress={toggleTheme}
      className="p-2 rounded-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MdDarkMode className="w-5 h-5 text-black" />
      ) : (
        <MdLightMode className="w-5 h-5" />
      )}
    </Button>
    </Tooltip>
  );
};

export default ThemeToggle;