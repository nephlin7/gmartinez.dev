import { gray, violet, violetDark, slate, slateDark, grayDark } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config, reset } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...violet,
      ...slate,

      figureBg: gray.gray12,
    },
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...violetDark,
    ...slateDark,

    figureBg: gray.gray12,
  },
});

const GlobalStyles = globalCss({
  body: {
    background: '$gray1',
    color: '$text',
  },
});

GlobalStyles();
