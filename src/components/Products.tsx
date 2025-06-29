import { FC } from 'react';

const productList = [
  { name: 'WEB APPLICATION', img: '/images/production/1.png' },
  { name: 'E-COMMERCE SITE' },
  { name: 'MOBILE APP' },
  { name: 'API DEVELOPMENT' },
];

const Products: FC = () => (
  <section className="px-6 py-32">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl md:text-6xl font-black mb-4">Products</h3>
      {/* <h4 className="text-2xl md:text-4xl font-bold mb-8 text-gray-400">What I Do</h4> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {productList.map((product, idx) => (
          <div key={idx} className="aspect-square bg-gray-900/50 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-4 hover:bg-gray-800/70 hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-800/50 hover:border-gray-700 group">
            {product.img ? (
              <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <span className="text-xs md:text-sm text-center font-bold group-hover:text-gray-300 transition-colors duration-300">COMING SOON</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products; 