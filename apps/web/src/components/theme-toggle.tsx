import { IconMoon, IconSun } from '@tabler/icons';
import { useTheme } from 'next-themes';

import { styled } from '../stitches.config';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ToggleBox>
      <ThemeToggleButton onClick={toggleTheme}>{theme === 'dark' ? <IconSun /> : <IconMoon />}</ThemeToggleButton>
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
