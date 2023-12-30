import { keyframes } from '@stitches/react';

import { styled } from '@/utils/stitches.config';

const slideUp = keyframes({
  '0%': { transform: 'translate(0,100%)', opacity: 0 },
  '100%': { transform: 'translate(0,0)', opacity: 1 },
});

const fedeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const ProfileWrapper = styled('section', {
  position: 'relative',
  left: 0,
  width: '80%',

  fontSize: '0.9rem',

  h1: {
    fontFamily: 'var(--bodoni)',
    fontSize: '35px',
    marginBottom: '15px',
    color: '$slate12',
    fontWeight: '800',
    fontStyle: 'italic',
    transform: 'translate(0,100%)',
    animation: `${slideUp} 1.5s cubic-bezier(0.77, 0, 0.175, 1);`,
    animationIterationCount: 1,
    transformOrigin: '50% 50%',
    animationFillMode: 'forwards',

    '@media (min-width: 993px)': {
      fontSize: '70px',
    },
  },

  p: {
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '$slate11',
    animation: `${fedeIn} 1.5s cubic-bezier(0.77, 0, 0.175, 1);`,
  },

  span: {
    color: '$violet11',
    backgroundColor: '$violet3',
    fontWeight: '300',
    padding: '6px 10px',
    borderRadius: '100px',
    fontSize: '0.5rem',
    letterSpacing: 1,
    animation: `${fedeIn} 1s cubic-bezier(0.77, 0, 0.175, 1);`,

    '@media (min-width: 993px)': {
      padding: '6px 20px',
      fontSize: '0.8rem',
    },
  },

  '@media (min-width: 993px)': {
    width: '50%',
    left: '100px',
    paddingLeft: 0,
    fontSize: '1rem',

    p: {
      maxWidth: '80%',
    },
  },
});

export const HeadingWrapper = styled('div', {
  overflow: 'hidden',
  paddingTop: 7
});

export const PortableTextWrapper = styled('div', {
  p: {
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '$slate11',
  },
});

export const BlogList = styled('ul', {
  padding: 0,
  li: {
    marginBottom: '10px',
    a: {
      animation: `${fedeIn} 2s cubic-bezier(0.77, 0, 0.175, 1);`,
      marginRight: '10px',
      color: '$slate12',
      textDecoration: 'none',
      transition: 'color ease-in .3s',

      '&:hover': {
        color: '$violet11',
      },
    },
  },
});
