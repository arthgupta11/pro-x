import { useRouter } from "next/router";
import productsData from "../../Data/productData";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto bg-white shadow-lg rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">${product.price}</p>
      <p className="text-md font-semibold mb-4">Category: {product.category}</p>
      <p className="text-gray-600 mb-6">{product.details}</p>
      <div className="mb-6">
        <h3 className="font-bold mb-2">Tags:</h3>
        <div className="flex gap-2 flex-wrap">
          {product.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button
         onClick={() => router.push(`/order?id=${product.id}`)}
         className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Buy Now
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
