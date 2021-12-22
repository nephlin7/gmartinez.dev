import { DevImage } from './image'
import { HeroImageWrapper, ImageSide } from './hero-image.styles'

export function HeroImage() {
  return (
    <ImageSide>
      <HeroImageWrapper>
        <DevImage />
      </HeroImageWrapper>
    </ImageSide>
  )
}
