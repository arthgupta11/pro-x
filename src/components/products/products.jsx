import { useState } from "react";
import productsData from "../../Data/productData";
import ProductCard from "./productCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [category, setCategory] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    product.price <= maxPrice &&
    (category === "" || product.category === category)
  );

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>

      <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-md w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-40"
          />
        </div>

        <select
          className="border p-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
