import React from 'react';
import { createRoot } from 'react-dom/client';

import { Carousel, CarouselItem } from 'react-round-carousel';
import 'react-round-carousel/src/index.css';

const Works = () => {
    const items = Array(10)
        .fill('')
        .map((_, index) => ({
            alt: 'A random photo',
            image: `https://picsum.photos/${210 + index}`,
            content: (
                <div>
                    <strong>Round Carousel</strong>
                    <span>Slide number {index + 1}</span>
                </div>
            )
        }));
    return (
        <div className='w-full min-h-[100vh] bg-[#08172b] flex items-center'>
            <div className='w-[90%] min-h-[80vh]'>
                <Carousel itemWidth={700} items={items} />
            </div>
        </div>
    );
};

export default Works;