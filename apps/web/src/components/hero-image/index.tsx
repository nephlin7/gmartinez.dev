import { ImageSide, HeroImageWrapper } from './hero-image.styles';

import { urlFor } from '@/utils/sanity';

interface Props {
  image: string;
}

export function HeroImage({ image }: Props) {
  return (
    <ImageSide>
      <HeroImageWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="devImage" alt="Gerald Martinez" src={urlFor(image).url()} loading="eager" />
      </HeroImageWrapper>
    </ImageSide>
  );
}
