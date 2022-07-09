import { styled } from '@/utils/stitches.config';

export const SocialIconsWrapper = styled('ul', {
  position: 'absolute',
  bottom: '30px',
  right: '30px',
  display: 'inline-flex',

  li: {
    marginRight: '10px',
  },

  a: {
    svg: {
      width: '35px',
      height: '35px',
      color: '$violet12',
    },
  },
});
