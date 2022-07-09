import { styled } from '@/utils/stitches.config';

export const ProfileWrapper = styled('section', {
  position: 'relative',
  left: 0,
  paddingLeft: '20px',

  h1: {
    fontSize: '50px',
    marginTop: '10px',
    marginBottom: '15px',
    color: '$slate12',
  },

  p: {
    lineHeight: '27px',
    marginBottom: '15px',
    color: '$slate11',
  },

  span: {
    color: '$violet11',
    backgroundColor: '$violet3',
  },

  '@media (min-width: 993px)': {
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
    lineHeight: '27px',
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
      color: '$violet12',
      textDecoration: 'none',
    },
  },
});
