import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/productData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-lg text-gray-700 mb-2">Category: {product.category}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.details}</p>

      <div className="mb-4">
        <h4 className="font-semibold">Tags:</h4>
        <div className="flex gap-2 mt-1 flex-wrap">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
          Buy Now
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
