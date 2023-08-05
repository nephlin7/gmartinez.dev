import { keyframes } from '@stitches/react';

import { styled } from '@/utils/stitches.config';

const fedeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const SocialIconsWrapper = styled('ul', {
  position: 'absolute',
  bottom: '30px',
  display: 'inline-flex',

  li: {
    marginRight: '10px',
    animation: `${fedeIn} 1s cubic-bezier(0.77, 0, 0.175, 1);`,
  },

  a: {
    svg: {
      width: '35px',
      height: '35px',
      color: '$violet12',
    },
  },
});
