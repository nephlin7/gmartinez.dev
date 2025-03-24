'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-[30px] right-[30px]">
      <button onClick={handleToggleTheme} className="bg-transparent border-none text-[20px] cursor-pointer">
        {theme === 'dark' ? (
          <IconSun className="w-[30px] h-[30px] text-amber-300" />
        ) : (
          <IconMoon className="w-[30px] h-[30px] text-blue-950" />
        )}
      </button>
    </div>
  );
}
