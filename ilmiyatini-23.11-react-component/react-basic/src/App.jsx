import React from 'react';
import NavBar from './NavBar';
import ProductCard from './ProductCard';

export default function App() {
    const productData = {
        name: 'SMEG Stand Mixer (SMF02)',
        price: 1099,
        image: 'smeg-black.png',
        additionalImages: ['smeg-red.png', 'smeg-pink.png', 'smeg-black.png'],
        features: [
            'Brand : SMEG',
            'Control Type : Lever',
            'LCD : No',
            'Capacity : 1 L',
            'Dimensions (HxLxW) : 37.8cm x 40.2cm x 22.1cm',
            'Power : 800 watt',
            'Number of Speed : 10',
            'Weight : 9.5 kg',
        ],
    };
    return (
        <div>
            <NavBar />
            <ProductCard {...productData} />
        </div>
    );
}
