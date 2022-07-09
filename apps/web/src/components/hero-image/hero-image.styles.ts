import { styled } from '../../stitches.config';

export const ImageSide = styled('section', {
  alignItems: 'center',
  background: '$figureBg',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  fontSize: ' 2rem',
  height: '100vh',
  justifyContent: 'center',
  lineHeight: '3.5rem',
  position: 'relative',
  textAlign: 'center',
  width: '40%',
});

export const HeroImageWrapper = styled('div', {
  position: 'absolute',
  width: '94%',
  top: '50%',
  right: '-200px',
  transform: 'translateY(-50%)',
  boxShadow: '0 16px 48px rgba(45, 45, 45, 0.31)',
  borderRadius: '6px',
  overflow: 'hidden',
  maxWidth: '920px',
  lineHeight: '0',

  img: {
    objectFit: 'cover',
    width: '100%',
  },
});
