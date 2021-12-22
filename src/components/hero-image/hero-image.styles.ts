import { styled } from '@stitches/react'

export const ImageSide = styled('section', {
  position: 'relative',
  width: '40%',
  height: '100vh',
  textAlign: 'center',
  lineHeight: '3.5rem',
  fontSize: '2rem',
  background: 'linear-gradient(to bottom, #2c5364, #203a43, #0f2027)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const HeroImageWrapper = styled('div', {
  position: 'absolute',
  width: '90%',
  top: '50%',
  right: '-200px',
  transform: 'translateY(-50%)',
  boxShadow: '0 16px 48px rgba(45, 45, 45, 0.31)',
  borderRadius: '6px',
  opacity: '0',
  overflow: 'hidden',

  '& > span': {
    position: 'initial !important',
  },

  '& img': {
    objectFit: 'cover',
  },

  '@media (min-width: 993px)': {
    opacity: 1,
  },
})
