import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

interface HeroImageProps {
    imageBasePath: string | undefined;
}

const HeroImage = ({ imageBasePath }: HeroImageProps) => {
    return (
        <AspectRatio ratio={16 / 9} className='overflow-hidden border rounded-md'>
            {imageBasePath ? (
                <>
                    <Image
                        layout='fill'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${imageBasePath}/10/image.jpg`}
                        alt='hero-image'
                    />
                    <div className='absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black'></div>
                    <div className='absolute bottom-3 right-4'>
                        <Image width={100} height={38} src={'/apsignature_hindi.png'} alt='ap_signature' />
                    </div>
                </>
            ) : (
                <Skeleton className='w-full h-full'></Skeleton>
            )}
        </AspectRatio>
    );
};

export default HeroImage;
