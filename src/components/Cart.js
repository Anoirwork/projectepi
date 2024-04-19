import React, { useContext, useEffect } from 'react';
import cartContext from '../context/cartContext';

const Cart = () => {
    const { isCartOpen, cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(cartContext);

    useEffect(() => {
        const docBody = document.body;

        if (isCartOpen) {
            docBody.classList.add('overflow_hide');
        } else {
            docBody.classList.remove('overflow_hide');
        }
    }, [isCartOpen]);

    useEffect(() => {
        const outsideClose = (e) => {
            if (e.target.id === 'cart') {
                toggleCart(false);
            }
        };

        window.addEventListener('click', outsideClose);

        return () => {
            window.removeEventListener('click', outsideClose);
        };
    }, [toggleCart]);

    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    return (
        <>
            {isCartOpen && (
                <div id="cart" className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30">
                    <div className="cart_content bg-gray-900 absolute top-0 right-0 w-full max-w-lg h-full">
                        <div className="cart_head py-4 px-6 flex justify-between items-center">
                            <h2 className="text-white text-lg">Cart <small>({cartQuantity})</small></h2>
                            <div
                                title="Close"
                                className="close_btn cursor-pointer text-white opacity-80 transition duration-200 ease-in-out"
                                onClick={() => toggleCart(false)}
                            >
                                <span className="text-2xl leading-tight">&times;</span>
                            </div>
                        </div>

                        <div className="cart_body py-8 px-6 overflow-y-auto max-h-4/5">
                            {cartQuantity === 0 ? (
                                <h2 className="text-white">Cart is empty</h2>
                            ) : (
                                cartItems.map(item => {
                                    const { id, img, title, price, quantity } = item;
                                    const itemTotal = price * quantity;

                                    return (
                                        <div className="cart_items grid grid-cols-4 gap-8 items-center mb-6" key={id}>
                                            <figure className="cart_items_img col-span-1">
                                                <img src={img} alt="product-img" className="w-full" />
                                            </figure>

                                            <div className="cart_items_info col-span-2">
                                                <h4 className="text-white">{title}</h4>
                                                <h3 className="price text-white">DT {itemTotal.toLocaleString()}</h3>
                                            </div>

                                            <div className="cart_items_quantity col-span-1 flex flex-col items-center gap-2 bg-gray-800 p-2">
                                                <span className="text-2xl leading-tight bg-gray-100 py-3 px-4 cursor-pointer" onClick={() => decrementItem(id)}>&minus;</span>
                                                <b>{quantity}</b>
                                                <span className="text-2xl leading-tight bg-gray-100 py-3 px-4 cursor-pointer" onClick={() => incrementItem(id)}>&#43;</span>
                                            </div>

                                            <div className="cart_items_delete col-span-1 text-center cursor-pointer opacity-70 transition duration-200 ease-in-out" title="Remove Item" onClick={() => removeItem(id)}>
                                                <span className="text-2xl leading-tight">&times;</span>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        <div className="cart_foot absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-6 bg-gray-800 shadow">
                            <h3 className="text-white">
                                <small>Total:</small>
                                <b>DT {cartTotal.toLocaleString()}</b>
                            </h3>

                            <button
                                type="button"
                                className="checkout_btn bg-gray-100 text-black text-lg px-4 py-2"
                                disabled={cartQuantity === 0}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
