import Image from 'next/image';

import { ImageSide, HeroImageWrapper } from './hero-image.styles';

import { urlFor } from '@/utils/sanity';

interface Props {
  image: string;
}

export function HeroImage({ image }: Props) {
  return (
    <ImageSide>
      <HeroImageWrapper>
        <Image className="devImage" alt="Gerald Martinez" src={urlFor(image).url()} width={518} height={591} priority />
      </HeroImageWrapper>
    </ImageSide>
  );
}
