import '../css/reset.css';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';
import { Bodoni_Moda, Jost } from 'next/font/google';

import { darkTheme } from '@/utils/stitches.config';

const bodoni = Bodoni_Moda({
  weight: ['800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--bodoni',
});

const jost = Jost({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <main className={clsx(bodoni.variable, jost.className)}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
