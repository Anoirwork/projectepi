import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    return (
        <>
            <section className="bg-gray-100 py-12" id="home">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsData.map((item) => (
                            <ProductsCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
