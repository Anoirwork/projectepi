import React, { useContext } from 'react';
import cartContext from '../context/cartContext';

const Header = () => {
    const { cartItems, toggleCart } = useContext(cartContext);
    const cartQuantity = cartItems.length;

    return (
        <>
            <header className="bg-primary-color" id="header">
                <div className="container mx-auto py-4">
                    <div className="navbar flex justify-between items-center">
                        <h4 className="text-white text-lg font-bold">React Shopping Cart</h4>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon relative cursor-pointer"
                                onClick={() => toggleCart(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" className="w-6 h-6" />
                                {cartQuantity >= 1 && (
                                    <span className="badge bg-red-700 text-white text-xs py-1 px-2 absolute top-0 right-0 -mt-1 -mr-1 rounded-full">{cartQuantity}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
