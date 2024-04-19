import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';

const ProductsCard = (props) => {
    const { img, rating, title, price } = props;
    const { addItem } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        const item = { ...props };
        addItem(item);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    return (
        <>
            <div className="product_card border border-gray-300 rounded-lg p-4 shadow">
                <figure>
                    <img src={img} alt="item-img" className="w-full rounded-lg" />
                </figure>
                <strong className="block mt-2 text-sm text-yellow-500">{rating}</strong>
                <h4 className="mt-1 text-lg font-semibold">{title}</h4>
                <h3 className="text-lg font-bold text-gray-800 mt-1">DT {price.toLocaleString()}</h3>
                <button
                    type="button"
                    className={`btn bg-primary-color text-black text-sm font-semibold py-2 px-4 mt-2 focus:outline-none transition duration-300 ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;
