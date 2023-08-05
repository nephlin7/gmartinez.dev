import { gray, violet, violetDark, slate, slateDark, grayDark } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...violet,
      ...slate,

      figureBg: slate.slate12,
      bodyBg: 'linear-gradient(to top, rgb(223, 233, 243) 0%, white 100%)',
    },
    fonts: {
      primary: 'Hubot Sans',
    },
    shadows: {
      default: `0 25px 50px -12px ${slateDark.slate4}`,
    },
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...violetDark,
    ...slateDark,

    figureBg: slate.slate12,
    bodyBg: slate.slate12,
  },
  shadows: {
    default: `0 25px 50px -12px ${slateDark.slate1}`,
  },
});

const GlobalStyles = globalCss({
  body: {
    background: '$bodyBg',
    transition: 'background .3s',
  },
});

GlobalStyles();
