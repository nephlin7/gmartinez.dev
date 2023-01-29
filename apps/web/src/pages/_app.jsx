import '../css/reset.css';

import { ThemeProvider } from 'next-themes';

import { darkTheme } from '@/utils/stitches.config';

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
