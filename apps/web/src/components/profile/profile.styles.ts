import { styled } from '@/utils/stitches.config';

export const ProfileWrapper = styled('section', {
  position: 'relative',
  left: 0,
  paddingLeft: '20px',
  width: '80%',

  h1: {
    fontFamily: 'var(--bodoni)',
    fontSize: '50px',
    marginBottom: '15px',
    color: '$slate12',
    fontWeight: '800',
    fontStyle: 'italic',

    '@media (min-width: 1200px)': {
      fontSize: '70px',
    },
  },

  p: {
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '$slate11',
  },

  span: {
    color: '$violet11',
    backgroundColor: '$violet3',
    fontWeight: '300',
    padding: '6px 20px',
    borderRadius: '100px',
    fontSize: '0.8rem',
    letterSpacing: 1,
  },

  '@media (min-width: 1200px)': {
    width: '50%',
    left: '100px',
    paddingLeft: 0,

    p: {
      maxWidth: '80%',
    },
  },
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
      marginLeft: '10px',
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
