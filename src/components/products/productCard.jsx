import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <span className="text-sm text-blue-500 font-semibold block mb-3">{product.category}</span>
      <button
        onClick={handleViewDetails}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
