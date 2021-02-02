import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyImage({ image, width = '100%', style = {} }) {
    return <LazyLoadImage
        style={style}
        alt={image}
        effect="blur"
        src={image} width={width} />;
}

export default LazyImage;