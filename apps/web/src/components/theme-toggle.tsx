import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { styled } from '@/utils/stitches.config';

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
    <ToggleBox>
      <ThemeToggleButton onClick={handleToggleTheme}>{theme === 'dark' ? <IconSun /> : <IconMoon />}</ThemeToggleButton>
    </ToggleBox>
  );
}

const ToggleBox = styled('div', {
  position: 'absolute',
  top: 30,
  right: 30,
});

const ThemeToggleButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',

  svg: {
    width: '30px',
    height: '30px',
    color: '$violet12',
  },
});
